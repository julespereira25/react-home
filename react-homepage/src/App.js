import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/navbar";
import SimpleSlider from "./components/slider/slider";
import PersonalizedNutrition from "./components/Personalized nutrition/PersonalizedNutrition";
import Supermilk from "./components/SupermilkInfo/supermilk";
import RetailPartner from "./components/retailPartner/retailPartner";
import Vitamins from "./components/vitamins/vitamins";
import ProductButton from "./components/Buttons/productButtons";
// import Parentslider from "./components/parentsSlider/parentsSlidersection";
import VideoSection from "./components/videoSection/videoSection";

import Footer from "./footer/footer";

function App() {
  return (
    <div>
      <Navbar />
      <SimpleSlider />
      <PersonalizedNutrition />
      <Supermilk />
      <Vitamins />
      {/* <ProductButton /> */}
      {/* <Parentslider /> */}
      <VideoSection />
      <RetailPartner />

      <Footer />
    </div>
  );
}

export default App;
