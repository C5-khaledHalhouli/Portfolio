import "./style.css";
import { Card, Button,Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <div className="skills">
      <h1 className="skillsTittle">Projects</h1>
      <Card className="cardProj">
       
           <Carousel>
  <Carousel.Item>
    <img 
      className="d-block w-100"
      src="https://res.cloudinary.com/halhouli/image/upload/v1656622098/main_page_wxjukr.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/halhouli/image/upload/v1656622112/productsPage_lzjsui.png"
      alt="main page"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/halhouli/image/upload/v1656622072/productPage_hhpwf1.png"
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        <Card.Body>
          <Card.Title className="listProgtitle">Computer Shop</Card.Title>
          <Card.Text>
            <ul>
              <li className="listProg">E-Commerce website</li>
              <li className="listProg">Team Work Project</li>
              <li className="listProg">Scrum of the project</li>
              <li className="listProg">Built database by MySQL .</li>
              <li className="listProg">Built forntend by React and Redux.</li>
              <li className="listProg">Built backend by NodeJS and Express.js.</li>
            </ul>
          </Card.Text>
          <Card.Link href="https://github.com/C5-Data-pirates/MERAKI_Academy_Project_5">Code</Card.Link>
          <Card.Link href="https://meraki-computershop.netlify.app/">website</Card.Link>
        </Card.Body>
      </Card>
      <Card  className="cardProj">
      <Carousel>
  <Carousel.Item>
    <img 
      className="d-block w-100"
      src="https://res.cloudinary.com/halhouli/image/upload/v1653219275/hu6f8rvssjwtetb5ya4y.png"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/halhouli/image/upload/v1653167284/sayg1hsqbywhbg42rome.png"
      alt="main page"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/halhouli/image/upload/v1653219287/laprhunoclaxotqralkz.png"
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        <Card.Body>
          <Card.Title className="listProgtitle">Fixhome</Card.Title>
          <Card.Text>
            <ul>
              <li className="listProg"> Maintenance Service website</li>
              <li className="listProg">Solo Work Project.</li>
              <li className="listProg">Built database by MongoDB.</li>
              <li className="listProg">Built forntend by React.</li>
              <li className="listProg">Built backend by Node.js and Express.js.</li>
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
