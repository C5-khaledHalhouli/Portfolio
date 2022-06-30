import "./style.css";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <div className="skills">
      <h1 className="skillsTittle">Projects</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          className="imgCard"
          src="https://res.cloudinary.com/halhouli/image/upload/v1656594524/Untitled_omdxjn.jpg"
        />
        <Card.Body>
          <Card.Title>Computer Shop</Card.Title>
          <Card.Text>
            <ul>
              <li>E-Commerce website</li>
              <li>Team Work Project</li>
              <li>Scrum of the project</li>
              <li>Built database by MySQL .</li>
              <li>Built forntend by React and Redux.</li>
              <li>Built backend by NodeJS and Express.js.</li>
            </ul>
          </Card.Text>
          <Card.Link href="https://github.com/C5-Data-pirates/MERAKI_Academy_Project_5">Code</Card.Link>
          <Card.Link href="https://meraki-computershop.netlify.app/">website</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          className="imgCard"
          variant="top"
          src="https://res.cloudinary.com/halhouli/image/upload/v1656598199/Untitled_hzwijh.jpg"
        />
        <Card.Body>
          <Card.Title>Fixhome</Card.Title>
          <Card.Text>
            <ul>
              <li> Maintenance Service website</li>
              <li>Solo Work Project.</li>
              <li>Built database by MongoDB.</li>
              <li>Built forntend by React.</li>
              <li>Built backend by Node.js and Express.js.</li>
            </ul>
          </Card.Text>
          <Card.Link href="https://github.com/C5-khaledHalhouli/MERAKI_Academy_Project_4">Code</Card.Link>
          <Card.Link href="#">website</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Contact;
