import "./Features.css";

import {
  FaCertificate,
  FaCode,
  FaHeadset,
  FaClock,
} from "react-icons/fa";

function Features() {
  return (
    <section className="features">

      <div className="container">

        <div className="features-container">

          <div className="feature-box purple">
            <div className="feature-icon">
              <FaCertificate />
            </div>

            <div className="feature-text">
              <h4>شهادات معتمدة</h4>
              <p>بعد إتمام كل دورة</p>
            </div>
          </div>

          <div className="feature-box blue">
            <div className="feature-icon">
              <FaCode />
            </div>

            <div className="feature-text">
              <h4>مشاريع عملية</h4>
              <p>تطبيقات واقعية من البداية</p>
            </div>
          </div>

          <div className="feature-box green">
            <div className="feature-icon">
              <FaHeadset />
            </div>

            <div className="feature-text">
              <h4>دعم مستمر</h4>
              <p>مساعدة طوال فترة التدريب</p>
            </div>
          </div>

          <div className="feature-box orange">
            <div className="feature-icon">
              <FaClock />
            </div>

            <div className="feature-text">
              <h4>تعلم من المنزل</h4>
              <p>تعلم في أي وقت ومن أي مكان</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Features;