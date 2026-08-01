import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import logo from "../../assets/images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Good Academy" />

        <div>
          <h2>أكاديمية جود</h2>
          <span>للبرمجة</span>
        </div>
      </div>

      {/* Links */}
      <ul className={menuOpen ? "links active" : "links"}>

        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            الرئيسية
          </NavLink>
        </li>

        <li>
          <NavLink to="/courses" onClick={() => setMenuOpen(false)}>
            الكورسات
          </NavLink>
        </li>

        <li>
          <NavLink to="/instructors" onClick={() => setMenuOpen(false)}>
            المدربون
          </NavLink>
        </li>

        <li>
          <NavLink to="/reviews" onClick={() => setMenuOpen(false)}>
            آراء الطلاب
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            تواصل معنا
          </NavLink>
        </li>

      </ul>

      {/* Join Button */}
      <button className="join">
        <FaUser />
        <span>انضم الآن</span>
      </button>

      {/* Menu Icon */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </header>
  );
}

export default Navbar;