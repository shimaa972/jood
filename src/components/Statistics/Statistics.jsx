import "./Statistics.css";
import {
  FaStar,
  FaUser,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";

function Statistics() {
  const stats = [
    {
      id: 1,
      icon: <FaStar />,
      value: "95%",
      title: "نسبة رضا الطلاب",
      color: "#FFC107",
    },
    {
      id: 2,
      icon: <FaUser />,
      value: "+20",
      title: "مدرب محترف",
      color: "#39d353",
    },
    {
      id: 3,
      icon: <FaGraduationCap />,
      value: "+50",
      title: "دورة تدريبية",
      color: "#2196F3",
    },
    {
      id: 4,
      icon: <FaUsers />,
      value: "+1000",
      title: "طالب مستفيد",
      color: "#9C27B0",
    },
  ];

  return (
    <section className="statistics">
      <div className="container">

        <h2 className="statistics-title">
          أكاديمية جود بالأرقام
        </h2>

        <div className="statistics-grid">
          {stats.map((item) => (
            <div className="stat-card" key={item.id}>
              <div
                className="stat-icon"
                style={{ color: item.color }}
              >
                {item.icon}
              </div>

              <h3
                className="stat-number"
                style={{ color: item.color }}
              >
                {item.value}
              </h3>

              <p>{item.title}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Statistics;