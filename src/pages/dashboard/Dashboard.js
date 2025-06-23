import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { firestore } from '../../config/firebase'

export const Dashboard = () => {

    const [document, setDocument] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const readDocoment = async () => {

        setIsLoading(true)
        const querySnapshot = await getDocs(collection(firestore, "registration"));
        let arry = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            let data = doc.data()
            arry.push(data)

        });
        setDocument(arry)
        setIsLoading(false)
    }
    useEffect(() => {
        readDocoment()
    }, [])
    const handeDelete = async (registration) => {
        try {
            await deleteDoc(doc(firestore, "registration", registration.id));
            window.toastify("Student has been successfully deleted", "success")
        } catch (e) {
            console.error("Error adding document: ", e);
            window.toastify("Somothing went wrong while deleting student", "error")
        }
    }
    return (
        <div className='bgDashboard vh-100 d-flex justify-content-center'>
            <div className="container">
                <div className="mt-3">
                    <h2 className="text-center">Welcome to Dashboard!</h2>
                </div>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-12'>
                        <table className="table table-hover table-light">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Full Name</th>
                                    <th scope="col">Father Name</th>
                                    <th scope="col">DOB</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Course</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Whatsapp</th>
                                    <th scope="col">Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!isLoading ?
                                    document.map((doc, index) => {
                                        return <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td>{doc.fullName}</td>
                                            <td>{doc.fatherName}</td>
                                            <td>{doc.birthday}</td>
                                            <td>{doc.gender}</td>
                                            <td>{doc.course}</td>
                                            <td>{doc.email}</td>
                                            <td>{doc.whatsAppNo}</td>
                                            <td>{doc.address}</td>
                                        </tr>
                                    })
                                    : <tr><td colSpan="9" className="text-center"><div className="spinner spinner-border"></div></td></tr>}
                            </tbody>
                        </table>
                    </div >
                </div>
            </div>
        </div>
    )
}
