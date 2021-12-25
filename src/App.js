import { Button, Card, Col, Image, Row } from "react-bootstrap";
import "./App.css";
import Icon from "./components/Icon";
import mail from "../src/assets/mail.svg";

function App() {
  return (
    <div className="App">
      <Card className="text-center">
        <Card.Header className="header"></Card.Header>
        <Row>
          <Col>
            <Image src={mail} className="user" roundedCircle />
          </Col>
        </Row>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Icon />

          <div className="btn">
            <Button variant="primary">Go somewhere</Button>
          </div>
          <div className="btn">
            <Button variant="primary">Go somewhere</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
