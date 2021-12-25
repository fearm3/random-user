import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import man from "../assets/man.svg";
import woman from "../assets/woman.svg";
import mail from "../assets/mail.svg";
import growingMan from "../assets/growing-up-man.svg";
import growingWoman from "../assets/growing-up-woman.svg";
import map from "../assets/map.svg";
import padlock from "../assets/padlock.svg";
import phone from "../assets/phone.svg";

const Icon = () => {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4} lg={2}>
          <Image src={man} className="img" roundedCircle />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <Image src={mail} className="img" roundedCircle />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <Image src={growingMan} className="img" roundedCircle />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <Image src={map} className="img" roundedCircle />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <Image src={padlock} className="img" roundedCircle />
        </Col>
        <Col xs={6} md={4} lg={2}>
          <Image src={phone} className="img" roundedCircle />
        </Col>
      </Row>
    </Container>
  );
};

export default Icon;
