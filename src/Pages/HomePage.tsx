import { Link } from "react-router-dom";
import "./HomePage.css";
import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    /* Creating activeIndex atribute to store current background-pattern position.
    So it is not reseted at every onmouseover/onmouseleave */
    const menu = document.getElementById("main-menu");
    Array.from(
      document.getElementsByClassName("link") as HTMLCollectionOf<
        HTMLParagraphElement | HTMLAnchorElement
      >
    ).forEach((item, index) => {
      item.onmouseover = () => {
        if (menu !== null) menu.dataset.activeIndex = `${index}`;
        /* The dataset property in HTML is a read-only property of the HTMLElement
        (those starting with data-) it is used to store non standard atributes  */
      };
    });
  }, []);

  return (
    <>
      <div id="main-menu">
        <div id="main-menu-links">
          <Link className="homepage-link" to={"/MainProjects"}>
            Zrealizowane Projekty
          </Link>
          <Link className="homepage-link" to={"/CV"}>
            CV
          </Link>
          <Link className="homepage-link" to={"/SmallerProjects"}>
            Mniejsze projekty
          </Link>
          <Link className="homepage-link" to={"/Gallery"}>
            Galeria
          </Link>
          <p className="homepage-link">Kontakt</p>
        </div>
        <div id="background-pattern"></div>
      </div>
    </>
  );
}

export default HomePage;
