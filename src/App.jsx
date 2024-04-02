// import { useState } from "react";
import Climate from "./components/Climate/Climate";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
<<<<<<< HEAD
import PlaceList from "./components/PlaceList/PlaceList";
import Videos from "./components/Videos/Videos";
=======
import Navbar from "./components/Navbar/Navbar";
import PlaceList from "./components/PlaceList/PlaceList";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Videos from "./components/Videos/Videos";
import Weather from "./components/Weather/Weather";

>>>>>>> 0f33f98 (added weather widget)

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
<<<<<<< HEAD
      <main>
        <Info />
        <PlaceList />
=======
      <Navbar />
      <main>
        <Info />
        <PlaceList />
        <Weather />
>>>>>>> 0f33f98 (added weather widget)
        <Climate />
        <Videos />
      </main>
      <Footer />
<<<<<<< HEAD
=======
      <ScrollToTop />
>>>>>>> 0f33f98 (added weather widget)
    </>
  );
}

export default App;
