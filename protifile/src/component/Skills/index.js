import "./style.css";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Skills = () => {
  return (
    <div className="skills">
        <h1 className="skillsTittle">Skills</h1>
      <Card className="cardSkills" >
        <Card.Img
          variant="top"
          className="imgCard"
          src="https://res.cloudinary.com/halhouli/image/upload/v1656582547/soft-skills-training-for-employees_lzzszz.jpg"
        />
        <Card.Body>
          <Card.Title className="titleSkill">Soft Skills</Card.Title>
          <Card.Text>
            <ul>
              <li className="listSkill">Problem-Solving.</li>
              <li className="listSkill">Debugging.</li>
              <li className="listSkill">Time Management.</li>
              <li className="listSkill">Quick Learner.</li>
              <li className="listSkill">Hardworking.</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="cardSkills" >
        <Card.Img
        className="imgCard"
          variant="top"
          src="https://res.cloudinary.com/halhouli/image/upload/v1656582556/technical-skills-_l5y2mv.jpg"
        />
        <Card.Body>
          <Card.Title className="titleSkill">Technical Skills</Card.Title>
          <Card.Text>
            <ul>
              <li className="listSkill">MongoDB, MySQL.</li>
              <li className="listSkill">JavaScript.</li>
              <li className="listSkill">Node.js, Express.js.</li>
              <li className="listSkill">React, Redux.</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Skills;
