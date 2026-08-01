import "./InstructorCard.css";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

function InstructorCard({ image, name, title, job }) {
  return (
    <div className="instructor-card">

      <div className="image-box">
        <img src={image} alt={name} />
      </div>

      <span className="title">{title}</span>

      <h3>{name}</h3>

      <p>{job}</p>

      <div className="social-icons">
        <FaLinkedinIn />
        <FaTwitter />
        <FaGithub />
      </div>

    </div>
  );
}

export default InstructorCard;