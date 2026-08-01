import "./Hero.css";
import heroImg from "../../assets/images/hero.png";

import { FaArrowLeft, FaRocket } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <div className="hero-text">

          <h1>
            ابدأ مستقبلك
            <br />
            <span>في البرمجة</span>
          </h1>

          <h2>مع أكاديمية جود</h2>

          <p>
            تعلم البرمجة من الصفر حتى الاحتراف من خلال دورات عملية
            ومشاريع حقيقية مع أفضل المدربين.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              <FaRocket />
              ابدأ الآن
            </button>

            <button className="secondary-btn">
              <FaArrowLeft />
              استعرض الكورسات
            </button>

          </div>

        </div>

        <div className="hero-image">
          <img src={heroImg} alt="" />
        </div>

      </div>

    </section>
  );
}

export default Hero;