import { Link } from "react-router-dom";
import "./errorPage404.css";

export default function ErrorPage404() {
  return (
    <div className="error-page-404 ">
      <p>404 Strona nie istnieje</p>
      <Link className="link-error-404" to={"/"}>
        Strona Główna
      </Link>
    </div>
  );
}
