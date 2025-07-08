import "./App.css";

import { Route, Router, Routes } from "react-router-dom";

import AboutUsScreen from "./screens/AboutUsScreen";
import Footer from "./components/Footer";
import HeaderNavBar from "./components/HeaderNavBar";
import HomeScreen from "./screens/HomeScreen";
import OurProcessScreen from "./screens/OurProcessScreen";
import SpaceNewsScreen from "./screens/SpaceNewsScreen";

function App() {
  return (
    <>
      <HeaderNavBar />

      <div className=" w-full">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/SpaceNewsScreen" element={<SpaceNewsScreen />} />
          <Route path="/OurProcess" element={<OurProcessScreen />} />
          <Route path="/AboutUs" element={<AboutUsScreen />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
export default App;
