import { Button, Card } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          




          <div className="btn">
            <Button variant="primary">Go somewhere</Button>
          </div>
          <div className="btn">
            <Button variant="primary">Go somewhere</Button>
          </div>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
}

export default App;
