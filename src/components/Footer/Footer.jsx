import "./Footer.css";
import logo from "../../assets/images/logo.png";

import { NavLink } from "react-router-dom";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Academy */}

        <div className="footer-column">

          <div className="footer-logo">
            <img src={logo} alt="logo" />

            <div>
              <h3>أكاديمية جود</h3>
              <span>للبرمجة</span>
            </div>
          </div>

          <p>
            نحن نساعدك على اكتشاف مهاراتك وتعلم البرمجة
            بطريقة احترافية وبأسلوب ممتع.
          </p>

          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaLinkedinIn />
          </div>

        </div>

        {/* Links */}

        <div className="footer-column">

          <h4>روابط سريعة</h4>

          <NavLink to="/">الرئيسية</NavLink>
          <NavLink to="/courses">الكورسات</NavLink>
          <NavLink to="/instructors">المدربون</NavLink>
          <NavLink to="/reviews">آراء الطلاب</NavLink>
          <NavLink to="/contact">تواصل معنا</NavLink>

        </div>

        {/* Courses */}

        <div className="footer-column">

          <h4>الكورسات</h4>

          <NavLink to="/courses">Python</NavLink>
          <NavLink to="/courses">JavaScript</NavLink>
          <NavLink to="/courses">React</NavLink>
          <NavLink to="/courses">Scratch</NavLink>
          <NavLink to="/courses">جميع الكورسات</NavLink>

        </div>

        {/* Contact */}

        <div className="footer-column">

          <h4>تواصل معنا</h4>

    <p>
     <FaPhoneAlt />
      <a href="tel:+201018907222" dir="ltr">+20 101 890 7222</a>
    </p>

    <p>
     <FaEnvelope />
    <a href="mailto:info@joodacademy.com">joodacademy@gmail.com</a>
    </p>

          <p><FaMapMarkerAlt /> القاهرة - مصر</p>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 أكاديمية جود للبرمجة. جميع الحقوق محفوظة.
      </div>

    </footer>
  );
}

export default Footer;