import "./style.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillGithub,AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";


const Contact = () => {
  return (
    <div className="skills">
      <h1 className="skillsTittle">Contact me</h1>
      <div className="leftSideContact">
        <h1 className="contactInfo">khaled.halhouli@gmail.com</h1>
        <h1 className="contactInfo">+962798946171</h1>
      </div>
      <div className="rightSideContact">
        <Button variant="light" className="buttonContact" href="https://www.linkedin.com/in/khaled-halhouli/"><AiFillLinkedin/></Button>
        <Button variant="light" className="buttonContact" href="https://github.com/khaledHalhouli"><AiFillGithub/></Button>
        <Button variant="light" className="buttonContact" href="https://onedrive.live.com/?authkey=%21AtkQ8Co7rA4NiJ4&cid=022D999D68C4A0FF&id=22D999D68C4A0FF%21201373&parId=22D999D68C4A0FF%21200374&o=OneUp">CV</Button>
      </div>
    </div>
  );
};
export default Contact;
