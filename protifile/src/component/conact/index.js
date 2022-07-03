import "./style.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";


const Contact = () => {
  return (
    <div className="skills">
      <h1 className="skillsTittle">Contact me</h1>
      <div className="leftSideContact">
        <h1 className="contactInfo">khaled.halhouli@gmail.com</h1>
        <h1 className="contactInfo">+962798946171</h1>
      </div>
      <div className="rightSideContact">
        <Button
          variant="light"
          className="buttonContact"
          href="https://www.linkedin.com/in/khaled-halhouli/"
        >
          <AiFillLinkedin />
        </Button>
        <Button
          variant="light"
          className="buttonContact"
          href="https://github.com/khaledHalhouli"
        >
          <AiFillGithub />
        </Button>

        <Button
          variant="light"
          className="buttonContact"
          href={require("../Conact/KHALEd.pdf")}
          download
        >
          CV
        </Button>
      </div>
    </div>
  );
};
export default Contact;
