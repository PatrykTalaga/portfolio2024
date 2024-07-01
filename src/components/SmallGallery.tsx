import { useState } from "react";
import photos from "../assets/photos";
import "./smallGallery.css";

type propType = { handleClick: (imageUrl: string) => void };

export default function SmallGallery({ handleClick }: propType) {
  const [hide, setHide] = useState(true);
  const [isRotated, setIsRotated] = useState(false);
  /*   const scrollContainer = document.querySelector("#gallery-container");

  scrollContainer?.addEventListener("wheel", (event) => {
    event.preventDefault(); // Prevent default page scrolling
    scrollContainer.scrollLeft += event.deltaY * 5; // Adjust scrolling speed as needed
    console.log("alf");
  }); */

  /*  function handleSmallGallery() {
    const smallGallery = document.getElementById("photos");
    smallGallery?.classList.contains("display-none")
      ? smallGallery?.classList.remove("display-none")
      : smallGallery?.classList.add("display-none"); */
  /* if (smallGallery?.classList.contains("display-none")) {
      smallGallery?.classList.remove("display-none");
    } else {
      smallGallery?.classList.add("display-none");
    } */
  /*   } */

  function handleSmallGallery() {
    const secondPart = document.getElementById("photos");
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
    <>
      <div className="gallery-container" id="gallery-container">
        <button
          className="gallery-button"
          onClick={handleSmallGallery}
          style={{ transform: `rotate(${isRotated ? "180deg" : "0deg"})` }}
        >{`>`}</button>
        <div className="photos" id="photos">
          {photos.map((photo) => (
            <div className="gallery-item" key={photo}>
              <img
                src={photo}
                alt={`Slide ${photo}`}
                onClick={() => {
                  handleClick(photo);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
