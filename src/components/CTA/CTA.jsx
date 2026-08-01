import "./CTA.css";
import { FaPaperPlane } from "react-icons/fa";
import laptop from "../../assets/images/laptop.png";

function CTA() {
  return (
    <section className="cta">
      <div className="cta-content">

        <div className="cta-text">
          <h2>جاهز تبدأ رحلتك في البرمجة؟</h2>

          <p>
            انضم الآن إلى أكاديمية جود وابدأ تعلم البرمجة بطريقة احترافية
          </p>

          <button className="cta-btn">
            <FaPaperPlane />
            انضم الآن
          </button>
        </div>

        <div className="cta-image">
          <img src={laptop} alt="Laptop" />
        </div>

      </div>
    </section>
  );
}

export default CTA;