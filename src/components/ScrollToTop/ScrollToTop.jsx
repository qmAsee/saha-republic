import { useState, useEffect } from "react";
import "./ScrollToTop.css";
import { Link } from "react-scroll";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    setIsVisible(document.documentElement.scrollTop > 1500);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);
  return (
    <>
      <Link
        style={{ display: isVisible ? "block" : "none" }}
        className="scroll"
        to={"header"}
        smooth={true}
        duration={500}
      ></Link>
    </>
  );
}
