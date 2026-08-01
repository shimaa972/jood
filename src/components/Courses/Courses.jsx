import "./Courses.css";
import CourseCard from "../CourseCard/CourseCard";
import { FaArrowLeft } from "react-icons/fa";

import scratch from "../../assets/images/scratch.jpeg";
import python from "../../assets/images/python.jpeg";
import javascript from "../../assets/images/javascript.jpeg";
import react from "../../assets/images/react.jpeg";

function Courses() {
  const courses = [
    {
      image: scratch,
      bgColor: "#F59E0B",
      title: "Scratch",
      description: "ابدأ رحلة البرمجة للأطفال بطريقة ممتعة وسهلة من خلال Scratch.",
      level: "مبتدئ",
      hours: 16,
    },

    {
      image: react,
      bgColor: "#1E3A8A",
      title: "React",
      description: "تعلم إنشاء واجهات مستخدم احترافية باستخدام React.js.",
      level: "متقدم",
      hours: 32,
    },

    {
      image: javascript,
      bgColor: "#CA8A04",
      title: "JavaScript",
      description: "تعلم أساسيات البرمجة وتطوير المواقع باستخدام JavaScript.",
      level: "مبتدئ",
      hours: 24,
    },

    {
      image: python,
      bgColor: "#2563EB",
      title: "Python",
      description: "تعلم لغة Python من الصفر حتى الاحتراف وبناء المشاريع.",
      level: "مبتدئ",
      hours: 30,
    },
  ];

  return (
    <section className="courses">

      <div className="container">

        <div className="courses-header">

          <h2>أشهر الكورسات</h2>

          <p>
            أكثر من مجموعة متنوعة من الكورسات المصممة لتناسب جميع المستويات.
          </p>

        </div>

        <div className="courses-grid">

          {courses.map((course, index) => (
            <CourseCard
              key={index}
              image={course.image}
              bgColor={course.bgColor}
              title={course.title}
              description={course.description}
              level={course.level}
              hours={course.hours}
            />
          ))}

        </div>

        <div className="courses-footer">

          <button className="all-courses-btn">
            عرض جميع الكورسات
            <FaArrowLeft />
          </button>

        </div>

      </div>

    </section>
  );
}

export default Courses;