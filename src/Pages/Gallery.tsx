import "./gallery.css";
import { useState } from "react";
import photos from "../assets/photos";

import Navbar from "../components/Navbar";

import SmallGallery from "../components/SmallGallery";

export default function Gallery() {
  const [backgroundImage, setBackgroundImage] = useState(photos[0]);

  const handleClick = (imageUrl: string) => {
    setBackgroundImage(imageUrl);
  };

  return (
    <>
      <div className="gallery">
        <Navbar />
        <div
          className="background-absolute"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <SmallGallery handleClick={handleClick} />
      </div>

      {/* <SmallGallery handleClick={handleClick} /> */}
    </>
  );
}
