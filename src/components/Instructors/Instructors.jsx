import "./Instructors.css";
import InstructorCard from "../InstructorCard/InstructorCard";

import person1 from "../../assets/images/person1.jpeg";
import person2 from "../../assets/images/person2.jpeg";
import person3 from "../../assets/images/person3.jpeg";
import person4 from "../../assets/images/person4.jpeg";
import person5 from "../../assets/images/person5.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Instructors() {
  const instructors = [
    {
      id: 1,
      image: person1,
      title: "المهندسة",
      name: "أسماء خالد",
      job: "Mobile Developer",
    },
    {
      id: 2,
      image: person2,
      title: "المهندس",
      name: "عبدالرحمن علي",
      job: "Backend Developer",
    },
    {
      id: 3,
      image: person3,
      title: "المهندسة",
      name: "شيماء محمد",
      job: "Frontend Developer",
    },
    {
      id: 4,
      image: person4,
      title: "المهندس",
      name: "يوسف عبدالحميد",
      job: "Full Stack Developer",
    },
    {
      id: 5,
      image: person5,
      title: "المهندس",
      name: " محمد احمد",
      job: "Data Analyst",
    },
    
  ];

  return (
    <section className="instructors">

      <h2>مدربون محترفون</h2>

      <p>تعلم من أفضل الخبراء في مجال البرمجة</p>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        spaceBetween={25}
        slidesPerView={4}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          650: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {instructors.map((item) => (
          <SwiperSlide key={item.id}>
            <InstructorCard
              image={item.image}
              title={item.title}
              name={item.name}
              job={item.job}
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

export default Instructors;