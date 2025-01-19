import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/TestimonialCard";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
            {/* <h1 className="text-2xl text-center">chai aur code</h1> */}
            <HeroSection/>
            <FeaturedCourses/>
            <WhyChooseUs/>
            <MusicSchoolTestimonials/>
            <UpcomingWebinar/>
    </main>
  );
}
