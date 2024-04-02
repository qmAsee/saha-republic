// import { useState } from "react";
import Climate from "./components/Climate/Climate";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Navbar from "./components/Navbar/Navbar";
import PlaceList from "./components/PlaceList/PlaceList";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Videos from "./components/Videos/Videos";
import Weather from "./components/Weather/Weather";


function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Info />
        <PlaceList />
        <Weather />
        <Climate />
        <Videos />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
