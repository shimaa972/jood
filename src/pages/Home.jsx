import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Statistics from "../components/Statistics/Statistics";
import Courses from "../components/Courses/Courses";
import Instructors from "../components/Instructors/Instructors";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Statistics />
       <Courses />
      <Instructors />
      <Testimonials />
      <CTA />
    </>
  );
}

export default Home;