import { NextPage } from "next";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Works from "@/components/works";
import Team from "@/components/team";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

const Index: NextPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Works />
        <Team />
        <Contact /> 
      </main>
      <Footer />
    </>
  );
};

export default Index;
