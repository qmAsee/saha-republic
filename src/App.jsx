// import { useState } from "react";
import Climate from "./components/Climate/Climate";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import PlaceList from "./components/PlaceList/PlaceList";
import Videos from "./components/Videos/Videos";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <Info />
        <PlaceList />
        <Climate />
        <Videos />
      </main>
      <Footer />
    </>
  );
}

export default App;
