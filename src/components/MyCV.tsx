import cvData from "../assets/cv";
/* import "../assets/cvPhoto.jpg"; */
import "./myCV.css";

export default function MyCV() {
  return (
    <div className="my-cv">
      <div className="cv-contact">
        <img src="./src/assets/cvPhoto.jpg" alt="cv photo"></img>
        <h1>{cvData.name}</h1>
        <p>{cvData.addressLine1}</p>
        <p>{cvData.addressLine2}</p>
        <p>{`(${cvData.telRegionalString}) ${cvData.telString}`}</p>
        <p>{cvData.eMail}</p>
      </div>
      <h2>Wykształcenie</h2>
      <ol>
        {cvData.education.map((item, index) => (
          <li key={index}>
            <p>
              <b>{`${item.title} - ${item.school} ${item.startDate} - ${item.endDate}`}</b>
            </p>

            <p>{item.description}</p>
          </li>
        ))}
      </ol>
      <h2>Doświadczenie</h2>
      <ol>
        {cvData.employmentHistory.map((item, index) => (
          <li key={index}>
            <p>
              <b>{`${item.startDate} - ${item.endDate}`}</b>
            </p>
            <p>{item.companyName}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ol>
      <h2>Umiejętności</h2>
      <ol>
        {cvData.skills.map((item, index) => (
          <li key={index}>
            <p>{item}</p>
          </li>
        ))}
      </ol>
      <h2>Języki</h2>
      <ol>
        {cvData.languages.map((item, index) => (
          <li key={index}>
            <p>{item}</p>
          </li>
        ))}
      </ol>
      <h2>Certyfikaty</h2>
      <ol>
        {cvData.certificates.map((item, index) => (
          <li key={index}>
            <p>{item}</p>
          </li>
        ))}
      </ol>
      <h2>Zainteresowania</h2>
      <ol>
        {cvData.hobbies.map((item, index) => (
          <li key={index}>
            <p>{item}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
