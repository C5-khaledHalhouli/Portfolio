import "./style.css";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Skills = () => {
  return (
    <div className="skills">
        <h1 className="skillsTittle">Skills</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          className="imgCard"
          src="https://res.cloudinary.com/halhouli/image/upload/v1656582547/soft-skills-training-for-employees_lzzszz.jpg"
        />
        <Card.Body>
          <Card.Title>Soft Skills</Card.Title>
          <Card.Text>
            <ul>
              <li>Problem-Solving.</li>
              <li>Debugging.</li>
              <li>Time Management.</li>
              <li>Quick Learner.</li>
              <li>Hardworking.</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
        className="imgCard"
          variant="top"
          src="https://res.cloudinary.com/halhouli/image/upload/v1656582556/technical-skills-_l5y2mv.jpg"
        />
        <Card.Body>
          <Card.Title>Technical Skills</Card.Title>
          <Card.Text>
            <ul>
              <li>MongoDB, MySQL.</li>
              <li>JavaScript.</li>
              <li>Node.js, Express.js.</li>
              <li>React, Redux.</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Skills;
