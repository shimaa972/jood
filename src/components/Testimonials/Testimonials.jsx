import "./Testimonials.css";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaQuoteRight } from "react-icons/fa";

import student1 from "../../assets/images/student1.png";
import student2 from "../../assets/images/student1.png";
import student3 from "../../assets/images/student1.png";

function Testimonials() {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const testimonials = [

    {
      id:1,
      name:"أحمد محمد",
      job:"مطور ويب",
      image:student1,
      text:"أكاديمية جود غيرت حياتي، تعلمت البرمجة من الصفر وأصبحت أعمل كمطور ويب."
    },

    {
      id:2,
      name:"فاطمة علي",
      job:"Frontend Developer",
      image:student2,
      text:"شرح رائع ومشاريع عملية ساعدتني في بناء معرض أعمال والحصول على أول وظيفة."
    },

    {
      id:3,
      name:"محمد يوسف",
      job:"Full Stack Developer",
      image:student3,
      text:"أفضل مكان لتعلم البرمجة، المحتوى منظم والدعم مستمر طوال فترة الدراسة."
    },

    {
      id:4,
      name:"سارة خالد",
      job:"UI Designer",
      image:student2,
      text:"تعلمت التصميم والبرمجة معًا وكانت تجربة أكثر من رائعة."
    }

  ];

  return (

<section className="testimonials">

<div className="container">

<div className="section-title">

<h2>ماذا يقول طلابنا</h2>

</div>

<div className="slider-buttons">

<button ref={prevRef} className="custom-prev">

❮

</button>

<button ref={nextRef} className="custom-next">

❯

</button>

</div>

<Swiper

modules={[Navigation,Pagination,Autoplay]}

onBeforeInit={(swiper)=>{

swiper.params.navigation.prevEl=prevRef.current;
swiper.params.navigation.nextEl=nextRef.current;

}}

navigation={{
prevEl:prevRef.current,
nextEl:nextRef.current
}}

pagination={{
clickable:true
}}

autoplay={{

delay:3500,

disableOnInteraction:false

}}

loop={true}

spaceBetween={25}

breakpoints={{

0:{
slidesPerView:1
},

768:{
slidesPerView:2
},

1200:{
slidesPerView:3
}

}}

>

{

testimonials.map((item)=>(

<SwiperSlide key={item.id}>

<div className="testimonial-card">

<div className="quote">

<FaQuoteRight/>

</div>

<p>

{item.text}

</p>

<div className="student">

<img src={item.image} alt={item.name}/>

<div className="student-info">

<h4>{item.name}</h4>

<span>{item.job}</span>

</div>

</div>

</div>

</SwiperSlide>

))

}

</Swiper>

</div>

</section>

  );
}

export default Testimonials;