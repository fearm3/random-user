import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import "./App.css";

import axios from "axios";
import { useEffect, useState } from "react";
import man from "./assets/man.svg";
import woman from "./assets/woman.svg";
import mail from "./assets/mail.svg";
import growingMan from "./assets/growing-up-man.svg";
import growingWoman from "./assets/growing-up-woman.svg";
import map from "./assets/map.svg";
import padlock from "./assets/padlock.svg";
import phones from "./assets/phone.svg";

function App() {
  const [users, setUsers] = useState([]);
  const [values, setValues] = useState("");
  const [userInfo, setUserInfo] = useState([]); //add user
  const [currentData, setCurrentData] = useState({});

  const baseUrl = "https://randomuser.me/api/";

  const getUsers = async () => {
    // const res = await axios.get(baseUrl);
    const { data } = await axios.get(baseUrl);
    // console.log(data);
    // console.log(data.results);
    const person = data.results;
    setUsers(person);
    setCurrentData({
      title: "name",
      info:
        person[0].name.title +
        " " +
        person[0].name.first +
        " " +
        person[0].name.last,
    });
    console.log(currentData);
  };
  useEffect(() => {
    getUsers();
  }, []);

  // setUserInfo([
  //         ...userInfo, // önceki verileri tutnak için kullandık.
  //         {
  //           name: userCard?.name?.first,
  //           email: userCard?.email,
  //           phone: userCard?.phone,
  //           age: userCard?.dob?.age,
  //         },
  //       ]);
  //     }

  // const createUser = () => {
  //   setUserInfo([
  //     ...userInfo,
  //     {
  //       name: users?.name.first,
  //       email: users?.email,
  //       phone: users?.phone,
  //       age: users?.dob?.age,
  //     },
  //   ]);
  // };

  return (
    <div className="App">
      {users.map((user, index) => {
        const { name, location, gender, email, phone, login, dob } = user;
        return (
          <Card className="text-center" key={index}>
            <Card.Header className="header"></Card.Header>
            <Row>
              <Col>
                <Image
                  src={user.picture.large}
                  className="user"
                  roundedCircle
                />
              </Col>
            </Row>
            <Card.Body>
              {currentData ? (
                <Card.Text>
                  My {currentData.title} is <br />
                  {currentData.info}
                </Card.Text>
              ) : (
                <Card.Text style={{ color: "white" }}>
                  ad <br /> asd
                </Card.Text>
              )}

              <Container>
                <Row>
                  <Col xs={6} md={4} lg={2}>
                    <Image
                      src={gender === "male" ? man : woman}
                      className="img"
                      roundedCircle
                      value={name.fist}
                      onMouseOver={() => {
                        setCurrentData({
                          title: "name",
                          info: `${name.first} ${name.last}`,
                        });
                      }}
                      onMouseLeave={() => setCurrentData("")}
                    />
                  </Col>
                  <Col xs={6} md={4} lg={2}>
                    <Image
                      src={mail}
                      className="img"
                      roundedCircle
                      value={email}
                      onMouseOver={() => {
                        setCurrentData({
                          title: "email",
                          info: email,
                        });
                      }}
                      onMouseLeave={() => setCurrentData("")}
                    />
                  </Col>
                  <Col xs={6} md={4} lg={2}>
                    <Image
                      src={gender === "male" ? growingMan : growingWoman}
                      className="img"
                      roundedCircle
                      value={dob.age}
                      onMouseOver={() => {
                        setCurrentData({
                          title: "age",
                          info: dob.age,
                        });
                      }}
                      onMouseLeave={() => setCurrentData("")}
                    />
                  </Col>
                  <Col xs={6} md={4} lg={2}>
                    <Image
                      src={map}
                      className="img"
                      roundedCircle
                      value={location.street.number + location.street.name}
                      onMouseOver={() => {
                        setCurrentData({
                          title: "street",
                          info: location.street.number + location.street.name,
                        });
                      }}
                      onMouseLeave={() => setCurrentData("")}
                    />
                  </Col>
                  <Col xs={6} md={4} lg={2}>
                    <Image
                      src={phones}
                      className="img"
                      roundedCircle
                      value={phone}
                      onMouseOver={() => {
                        setCurrentData({
                          title: "phone",
                          info: phone,
                        });
                      }}
                      onMouseLeave={() => setCurrentData("")}
                    />
                  </Col>
                  <Col xs={6} md={4} lg={2}>
                    <Image
                      src={padlock}
                      className="img"
                      roundedCircle
                      value={login.password}
                      onMouseOver={() => {
                        setCurrentData({
                          title: "password",
                          info: login.password,
                        });
                      }}
                      onMouseLeave={() => setCurrentData("")}
                    />
                  </Col>
                </Row>
              </Container>
              <div className="btn">
                <Button variant="primary" onClick={getUsers}>
                  Random User
                </Button>
              </div>
              <div className="btn">
                <Button variant="primary">Add User</Button>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default App;
