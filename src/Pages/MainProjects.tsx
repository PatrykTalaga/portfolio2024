import MainProjectsCards from "../components/MainProjectsCards";
import Navbar from "../components/Navbar";
import "./mainProjects.css";
export default function MainProjects() {
  return (
    <div className="main-projects">
      <Navbar />
      <MainProjectsCards />
    </div>
  );
}
