import Nazara from "../../assets/nazra-quran.jpg";
import Tarjama from "../../assets/tarjama-quran.jpg";
import Tafsser from "../../assets/tafseerCourse.jpg";
import NamzaCourse from "../../assets/namz-course.jpg";
import FazUloom from "../../assets/farzUloom.jpg";
import DuaBook from "../../assets/duaCourse.jpg";
import { Link } from "react-router-dom";

const CoursesData = [
  {
    img: Nazara,
    hadding: "Qaida & Nazra",
    paragaraph:
      "Learn Quran  with Quran Nazra (Quran reading) and become a reciter of Quran with proper pronunciation and correct origins.",
    enroll: (
      <Link className="btn w-50 " to="/registration">
        Apply Now
      </Link>
    ),
  },
  {
    img: Tarjama,
    hadding: "Tarjamat ul Quran",
    paragaraph:
      "An opportunity to learn Quran translation (Quran Tarjuma) and get to know the rulings and commandments of Almighty in the Quran.",
    enroll: (
      <Link className="btn w-50" to="/registration">
        Apply Now
      </Link>
    ),
  },
  {
    img: Tafsser,
    hadding: "Tafseer Course",
    paragaraph:
      "In this course, students will read, translate, and explain the Holy Quran. They will also receive extra attention from highly experienced and qualified teachers.",
    enroll: (
      <Link className="btn w-50" to="/registration">
        Apply Now
      </Link>
    ),
  },

  {
    img: NamzaCourse,
    hadding: "Namaz Course",
    paragaraph:
      "In this course you will be able to learn the complete method of Prayers (Namaz). Whatever will be taught about prayer in the Quran and hadiths",
    enroll: (
      <Link className="btn w-50" to="/registration">
        Apply Now
      </Link>
    ),
  },
  {
    img: FazUloom,
    hadding: "Farz Uloom",
    paragaraph:
      "In this Farz Uloom course, you will learn the basic fundamental rulings of Sharia via book which is obligatory for every sane male and female.",
    enroll: (
      <Link className="btn w-50" to="/registration">
        Apply Now
      </Link>
    ),
  },
  {
    img: DuaBook,
    hadding: "Dua Book",
    paragaraph:
      "Encourage your children to learn duas from a very young age. Our Dua Book consists of numerous duas that your kids should start memorizing at an early age.",
    enroll: (
      <Link className="btn w-50" to="/registration">
        Apply Now
      </Link>
    ),
  },
];
export default CoursesData;
