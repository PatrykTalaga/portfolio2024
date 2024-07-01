import Navbar from "../components/Navbar";
import SmallerProjectsCards from "../components/SmallerProjectsCards";
import "./smallerProjects.css";

export default function SmallerProjects() {
  return (
    <div className="smaller-projects">
      <Navbar />
      <SmallerProjectsCards />
    </div>
  );
}
