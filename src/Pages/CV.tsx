import MyCV from "../components/MyCV";
import Navbar from "../components/Navbar";
import "./cv.css";

export default function CV() {
  return (
    <div className="cv">
      <Navbar />
      <MyCV />
    </div>
  );
}
