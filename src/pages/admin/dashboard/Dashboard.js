import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../../../config/firebase";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newStudentIds, setNewStudentIds] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Time ago function
  const timeAgo = (timestamp) => {
    if (!timestamp) return "Unknown";
    try {
      const now = new Date();
      const past = timestamp.toDate();
      const diffInSeconds = Math.floor((now - past) / 1000);

      if (diffInSeconds < 60) {
        return `${diffInSeconds} second${diffInSeconds !== 1 ? "s" : ""} ago`;
      }

      const diffInMinutes = Math.floor(diffInSeconds / 60);
      if (diffInMinutes < 60) {
        return `${diffInMinutes} minute${diffInMinutes !== 1 ? "s" : ""} ago`;
      }

      const diffInHours = Math.floor(diffInMinutes / 60);
      if (diffInHours < 24) {
        return `${diffInHours} hour${diffInHours !== 1 ? "s" : ""} ago`;
      }

      const diffInDays = Math.floor(diffInHours / 24);
      if (diffInDays < 30) {
        return `${diffInDays} day${diffInDays !== 1 ? "s" : ""} ago`;
      }

      const diffInMonths = Math.floor(diffInDays / 30);
      if (diffInMonths < 12) {
        return `${diffInMonths} month${diffInMonths !== 1 ? "s" : ""} ago`;
      }

      const diffInYears = Math.floor(diffInMonths / 12);
      return `${diffInYears} year${diffInYears !== 1 ? "s" : ""} ago`;
    } catch {
      return "Unknown";
    }
  };

  // Helper function to check if a date is today
  const isToday = (timestamp) => {
    if (!timestamp) return false;
    try {
      const today = new Date();
      const dateToCheck = timestamp.toDate();
      return (
        dateToCheck.getDate() === today.getDate() &&
        dateToCheck.getMonth() === today.getMonth() &&
        dateToCheck.getFullYear() === today.getFullYear()
      );
    } catch {
      return false;
    }
  };

  // Helper function to check if registration is within last hour
  const isWithinLastHour = (timestamp) => {
    if (!timestamp) return false;
    try {
      const now = new Date();
      const past = timestamp.toDate();
      const diffInMinutes = Math.floor((now - past) / (1000 * 60));
      return diffInMinutes <= 60;
    } catch {
      return false;
    }
  };

  // Firestore real-time listener
  useEffect(() => {
    const q = query(
      collection(firestore, "registration"),
      orderBy("dateCreated", "desc")
    );

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const studentsArray = [];
        const currentStudentIds = new Set(students.map((s) => s.id));
        const newIds = new Set();

        querySnapshot.forEach((docSnap) => {
          const data = docSnap.data();
          const studentData = {
            ...data,
            id: docSnap.id,
          };

          studentsArray.push(studentData);

          // Check if this is a new student
          if (!currentStudentIds.has(docSnap.id) && students.length > 0) {
            newIds.add(docSnap.id);
            studentData.isNew = true;
          }
        });

        setStudents(studentsArray);
        setLastUpdate(new Date());

        // Handle new registrations
        if (newIds.size > 0 && students.length > 0) {
          setNewStudentIds((prev) => new Set([...prev, ...newIds]));
          window.toastify(
            `🎉 ${newIds.size} new student${
              newIds.size > 1 ? "s" : ""
            } registered!`,
            "success"
          );

          // Auto-remove new status after 15 seconds
          setTimeout(() => {
            setStudents((prev) =>
              prev.map((student) => ({ ...student, isNew: false }))
            );
            setNewStudentIds(new Set());
          }, 15000);
        }

        setIsLoading(false);
      },
      (error) => {
        console.error("Error fetching students:", error);
        window.toastify("Failed to load student data 😞", "error");
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, [students, students.length]);

  // Filter and search functionality
  useEffect(() => {
    let filtered = [...students];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (student) =>
          student.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.course?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.fatherName?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Course filter
    if (selectedCourse) {
      filtered = filtered.filter(
        (student) => student.course === selectedCourse
      );
    }

    // Sort
    switch (sortBy) {
      case "newest":
        filtered.sort((a, b) => {
          if (!a.dateCreated || !b.dateCreated) return 0;
          return b.dateCreated.toDate() - a.dateCreated.toDate();
        });
        break;
      case "oldest":
        filtered.sort((a, b) => {
          if (!a.dateCreated || !b.dateCreated) return 0;
          return a.dateCreated.toDate() - b.dateCreated.toDate();
        });
        break;
      case "name":
        filtered.sort((a, b) =>
          (a.fullName || "").localeCompare(b.fullName || "")
        );
        break;
      default:
        break;
    }

    setFilteredStudents(filtered);
  }, [students, searchTerm, selectedCourse, sortBy]);

  const handleDelete = async (student) => {
    if (
      !window.confirm(`Are you sure you want to delete ${student.fullName}?`)
    ) {
      return;
    }

    try {
      await deleteDoc(doc(firestore, "registration", student.id));
      window.toastify(
        `${student.fullName} has been successfully deleted 🗑️`,
        "success"
      );
    } catch (e) {
      console.error("Error deleting document: ", e);
      window.toastify(
        "Something went wrong while deleting student 😞",
        "error"
      );
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";
    try {
      return timestamp.toDate().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return "N/A";
    }
  };

  // Statistics
  const studentsToday = students.filter((student) =>
    isToday(student.dateCreated)
  );

  const courses = [...new Set(students.map((s) => s.course).filter(Boolean))];

  // logout function
  const logout = () => {
    localStorage.clear("admin");
    navigate("/adminLogin");
  };

  return (
    <div className="bgDashboard">
      <div className="container-fluid m-0 p-0">
        <div className="row">
          <div className="col">
            <nav className="navbar mb-2 px-0 navbar-expand-lg ">
              <div className="container d-flex justify-content-center justify-content-md-between flex-wrap">
                <h2 className="text-center mb-2 mb-md-0">Student Dashboard</h2>
                <ul className="navbar-nav flex-row">
                  <li className="nav-item me-3 mb-2 mb-md-0">
                    <button className="btn position-relative">
                      Total Students
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                        {students.length}
                      </span>
                    </button>
                  </li>
                  <li className="nav-item mb-2 mb-md-0 me-3">
                    <button type="button" className="btn position-relative">
                      Today Registered
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                        {studentsToday.length}
                      </span>
                    </button>
                  </li>
                  <li className="nav-item mb-2 mb-md-0">
                    <button
                      type="button"
                      className="btn position-relative"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        {/* Search and Filter Controls */}
        <div className="d-flex justify-content-center align-items-center">
          <div className="row mb-3 w-100">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <div className="card">
                <div className="card-body">
                  <div className="row g-3 justify-content-center">
                    <div className="col-12 col-md-4">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-search"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search students..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {searchTerm && (
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={() => setSearchTerm("")}
                          >
                            <i className="bi bi-x"></i>
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <select
                        className="form-select"
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                      >
                        <option value="">All Courses</option>
                        {courses.map((course) => (
                          <option key={course} value={course}>
                            {course}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12 col-md-3">
                      <select
                        className="form-select"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                      >
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="name">Name A-Z</option>
                      </select>
                    </div>
                  </div>
                  {(searchTerm || selectedCourse) && (
                    <div className="mt-2 text-center">
                      {" "}
                      <small className="text-muted">
                        Showing {filteredStudents.length} of {students.length}{" "}
                        students
                        {searchTerm && ` matching "${searchTerm}"`}
                        {selectedCourse && ` in "${selectedCourse}"`}
                      </small>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Students Table */}
        <div className="container-fluid ">
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <div className="card">
                <div className="card-header text-white">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h5 className="mb-0">Registered Students</h5>
                    </div>
                    <small className="opacity-75">
                      Real-time updates enabled
                    </small>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-hover mb-0">
                      <thead className="table-light">
                        <tr>
                          <th scope="col" style={{ width: "50px" }}>
                            #
                          </th>
                          <th scope="col">Student Info</th>
                          <th scope="col">Course</th>
                          <th scope="col">Contact</th>
                          <th scope="col">Registration Time</th>
                          <th scope="col" style={{ width: "100px" }}>
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {isLoading ? (
                          <tr>
                            <td colSpan="6" className="text-center py-5 ">
                              <div className="d-flex textAndLoader justify-content-center align-items-center">
                                <div
                                  className="spinner-border me-3"
                                  role="status"
                                ></div>
                                <div>
                                  <h6 className="mb-1">Loading students...</h6>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ) : filteredStudents.length === 0 ? (
                          <tr>
                            <td
                              colSpan="6"
                              className="text-center py-5 text-muted"
                            >
                              <i className="bi bi-inbox display-1 d-block mb-3 opacity-50"></i>
                              <h5>No students found</h5>
                              <p className="mb-0">
                                {searchTerm || selectedCourse
                                  ? "Try adjusting your search or filter criteria"
                                  : "No students have registered yet"}
                              </p>
                            </td>
                          </tr>
                        ) : (
                          filteredStudents.map((student, index) => (
                            <tr
                              key={student.id}
                              className={`${
                                student.isNew
                                  ? "table-success border-start border-success border-4 animate__animated animate__pulse"
                                  : ""
                              } ${
                                isWithinLastHour(student.dateCreated)
                                  ? "table-warning"
                                  : ""
                              }`}
                            >
                              <td>
                                <div className="d-flex align-items-center">
                                  <span className="fw-bold">{index + 1}</span>
                                  {student.isNew && (
                                    <span className="badge bg-success text-white ms-2 blink">
                                      NEW!
                                    </span>
                                  )}
                                  {isWithinLastHour(student.dateCreated) &&
                                    !student.isNew && (
                                      <span className="badge bg-warning text-dark ms-2">
                                        RECENT
                                      </span>
                                    )}
                                </div>
                              </td>

                              <td className="align-middle p-3 text-nowrap">
                                <div className="studentInfo">
                                  <div className="fw-bold studentName">
                                    {student.fullName}
                                  </div>
                                  <small className="text-muted">
                                    <span className="fw-bold">Father:</span>{" "}
                                    {student.fatherName}
                                  </small>
                                  <br />
                                  <small className="text-muted">
                                    <span className="fw-bold"> DOB:</span>{" "}
                                    {student.birthday}
                                  </small>
                                  <br />
                                  <small className="text-muted">
                                    <span className="fw-bold">Gender:</span>{" "}
                                    {student.gender}
                                  </small>
                                </div>
                              </td>
                              <td className="align-middle p-3 text-nowrap">
                                <div>
                                  <span className="badge bg-info text-dark fs-6 rounded-pill px-3 py-2 ">
                                    {student.course}
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle p-3 text-nowrap">
                                <div>
                                  <div className="small">
                                    <i className="bi bi-envelope me-1"></i>
                                    <a
                                      href={`mailto:${student.email}`}
                                      className="text-decoration-none"
                                    >
                                      {student.email}
                                    </a>
                                  </div>
                                  <div className="small mt-1">
                                    <i className="bi bi-whatsapp me-1"></i>
                                    <a
                                      href={`https://wa.me/${student.whatsAppNo}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-decoration-none text-success"
                                    >
                                      {student.whatsAppNo}
                                    </a>
                                  </div>
                                  <div
                                    className="small mt-1 text-muted"
                                    title={student.address}
                                  >
                                    <i className="bi bi-geo-alt me-1"></i>
                                    <span
                                      className="text-truncate d-inline-block"
                                      style={{ maxWidth: "150px" }}
                                    >
                                      {student.address}
                                    </span>
                                  </div>
                                </div>
                              </td>

                              <td className="align-middle p-3 text-nowrap">
                                <div>
                                  <div className="fw-bold text-success">
                                    {timeAgo(student.dateCreated)}
                                  </div>
                                  <small className="text-muted">
                                    {formatDate(student.dateCreated)}
                                  </small>
                                </div>
                              </td>
                              <td className="align-middle p-3 text-nowrap">
                                <div className="d-flex justify-content-center align-items-center ">
                                  <button
                                    className="btn btn-sm"
                                    onClick={() => handleDelete(student)}
                                    title={`Delete ${student.fullName}`}
                                  >
                                    <i className="bi bi-trash"></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                {filteredStudents.length > 0 && (
                  <div className="card-footer bg-light">
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">
                        Total: {filteredStudents.length} student
                        {filteredStudents.length !== 1 ? "s" : ""}
                      </small>
                      <small className="text-muted">
                        <i className="bi bi-clock me-1"></i>
                        Last updated: {lastUpdate.toLocaleTimeString()}
                      </small>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
