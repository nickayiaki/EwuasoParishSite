import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import PastorIntroduction from "@/components/sections/pastor-introduction";
import BranchChurches from "@/components/sections/branch-churches";
import Ministries from "@/components/sections/ministries";
import Programs from "@/components/sections/programs";
import Projects from "@/components/sections/projects";
import ServicePrograms from "@/components/sections/service-programs";
import DisabilitySupport from "@/components/sections/disability-support";
import Donation from "@/components/sections/donation";
import EventsCalendar from "@/components/sections/events-calendar";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <PastorIntroduction />
        <BranchChurches />
        <Ministries />
        <Programs />
        <Projects />
        <ServicePrograms />
        <DisabilitySupport />
        <Donation />
        <EventsCalendar />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
