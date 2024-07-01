import { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  //could be done with just prevScrolled, but it's more readeable this way
  const [isScrolledDown, setisScrolledDown] = useState(false);
  const [prevScrolled, setprevScrolled] = useState(window.scrollY);
  const [hide, setHide] = useState(true);
  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (prevScrolled - window.scrollY < 0) {
        setisScrolledDown(true);
      } else {
        setisScrolledDown(false);
      }
      console.log({
        now: window.scrollY,
        prev: prevScrolled,
        diff: `${prevScrolled - window.scrollY}`,
      });
      setprevScrolled(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrolled]);

  function handleHide() {
    const secondPart = document.getElementById("nav-second");
    if (secondPart && hide) {
      secondPart.style.display = "none";
      setHide(false);
    }
    if (secondPart && !hide) {
      secondPart.style.display = "flex";
      setHide(true);
    }
    setIsRotated(!isRotated);
  }

  return (
    <nav
      className={`navbar ${isScrolledDown ? "hidden" : ""}`}
      id="main-navbar"
    >
      <button
        className="navbar-button"
        onClick={handleHide}
        style={{ transform: `rotate(${isRotated ? "180deg" : "0deg"})` }}
      >
        {">"}
      </button>
      <div className="nav-second" id="nav-second">
        <Link className="nav-container gradient-border" to={"/"}>
          Strona Główna
        </Link>
        <Link className="nav-container gradient-border" to={"/MainProjects"}>
          Projekty
        </Link>
        <Link className="nav-container" to={"/CV"}>
          CV
        </Link>
        <Link className="nav-container" to={"/SmallerProjects"}>
          Mniejsze projekty
        </Link>
        <Link className="nav-container" to={"/Gallery"}>
          Galeria
        </Link>
      </div>
    </nav>
  );
}
