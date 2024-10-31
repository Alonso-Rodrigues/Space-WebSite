import { React } from "react";
import bgVideo from "./assets/videos/earth-bg.mp4";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner1 from "./components/Banners/Banner1";
import Banner2 from "./components/Banners/Banner2";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <div className="h-[700px] relative">
        <video autoPlay loop muted className="fixed right-0 top-0 h-[700px] w-full object-cover z[-1]">
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Navbar/>
        <Hero/>
      </div>
      {/* Services Card Section */}
      <Services/>
      <Banner1/>
      <Banner2/>
      <Footer/>
    </div>
  )
};

export default App;