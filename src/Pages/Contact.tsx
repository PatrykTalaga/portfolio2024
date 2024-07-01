import "./contact.css";
import contactData from "../assets/cv";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="contact">
      <Navbar />
      <div className="contacts-container">
        <h1>Kontakt</h1>
        <div>
          <p>
            <b>tel.: </b>
            {`(${contactData.telRegionalString}) ${contactData.telString}`}
          </p>
          <p>
            <b>email: </b>
            {contactData.eMail}
          </p>
        </div>
      </div>
    </div>
  );
}
