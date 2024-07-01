import { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  //could be done with just prevScrolled, but it's more readeable this way
  const [isScrolledDown, setisScrolledDown] = useState(false);
  const [prevScrolled, setprevScrolled] = useState(window.scrollY);

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

  return (
    <nav
      className={`navbar ${isScrolledDown ? "hidden" : ""}`}
      id="main-navbar"
    >
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
    </nav>
  );
}
