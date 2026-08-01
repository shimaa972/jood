import "./CourseCard.css";
import { FaSignal, FaClock } from "react-icons/fa";

function CourseCard({
  image,
  bgColor,
  title,
  description,
  level,
  hours,
}) {
  return (
    <div className="course-card">

      <div
        className="course-image"
        style={{ backgroundColor: bgColor }}
      >
        <img src={image} alt={title} />
      </div>

      <div className="course-content">

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="course-details">

          <span>
            <FaSignal />
            {level}
          </span>

          <span>
            <FaClock />
            {hours} س
          </span>

        </div>

        <button className="course-btn">
          استكشف الكورس
        </button>

      </div>

    </div>
  );
}

export default CourseCard;