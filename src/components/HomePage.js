import React from 'react';
import {
  Jumbotron, Button, Container, Row, Col
 } from 'reactstrap';
 import { NavLink } from 'react-router-dom';

import Landing from '../images/Landing1.jpg';

const jumStyle = {
  backgroundImage: `url(${Landing})`,
  height: "100vh"
};

class HomePage extends React.Component {
  render() {
    return (<div>
      <Jumbotron id="Home" className="middle flex-column HomePage" fluid style={jumStyle}>
        <p className="lead">
          <img src={require('../images/logo.png')} alt="home" style={{
              height: "50vh"
            }}/>
        </p>
        <p>
          <NavLink to="/skincare">
            <Button className="btn" size="lg" style={{opacity: ".3", borderRadius: "0"}}>
              Learn More
            </Button>
          </NavLink>
        </p>
      </Jumbotron>

      <Jumbotron className="flex-column middle" fluid>
        <p className="lead">
          <span className="display-2">Welcome to our Spa</span>
        </p>
        <div className="container-fluid">
          <Container fluid id="about" style={{
              paddingTop: "1em"
            }}>
            <Row>
              <Col style={{
                  padding: "0px"
                }} sm={12} md={6}>
                <NavLink to="/Fractora">
                  <div id="fade">
                    <strong>CONTOURING & CELLULITE TREATMENT</strong>
                  </div>
                </NavLink>
              </Col>
              <Col style={{
                  padding: "0px"
                }} sm={12} md={6}>
                <NavLink to="/Votiva">
                  <div id="fade">
                    <strong>VOTIVA</strong>
                  </div>
                </NavLink>
              </Col>
            </Row>
          </Container>
        </div>
        <p>
          <NavLink to="/skincare">
            <Button size="lg" style={{opacity: ".3", borderRadius: "0"}}>
              Learn More
            </Button>
          </NavLink>
        </p>
      </Jumbotron>

      <section>
        <Container fluid id="services" style={{
            paddingTop: "1em"
          }}>
          <Row>

            <Col style={{
                padding: "0px"
              }} sm={6} md={3}>
              <NavLink to="/skincare">
                <div id="fade">
                  <strong>SKIN CARE</strong>
                </div>
              </NavLink>
            </Col>

            <Col style={{
                padding: "0px"
              }} sm={6} md={3}>
              <NavLink to="/LaserHairRemoval">
                <div id="fade">
                  <strong>LASER HAIR REMOVAL</strong>
                </div>
            </NavLink>
            </Col>
            <Col style={{
                padding: "0px"
              }} sm={6} md={3}>
              <NavLink to="/OrganicTeethWhitening">
                <div id="fade">
                  <strong>TEETH WHITENING</strong>
                </div>
              </NavLink>
            </Col>
            <Col style={{
              padding: "0px"
            }} sm={6} md={3}>
            <NavLink to="/Manicure">
            <div id="fade">
                <strong>MANICURE</strong>
              </div>
            </NavLink>
          </Col>
          </Row>
        </Container>
      </section>

      <section >
        <Container fluid id="content" style={{
            paddingTop: "1em"
          }}>
          <Row>
            <Col style={{
                padding: "0px"
              }} sm={6} md={3}>
              <NavLink to="/NewAndHotServices">
                <div id="fade">
                  <strong>NEW SERVICES</strong>
                </div>
              </NavLink>
            </Col>
            <Col style={{
                padding: "0px"
              }} sm={6} md={3}>
              <NavLink to="/FindUs">
                <div id="fade">
                  <strong>USEFUL INFO</strong>
                </div>
              </NavLink>
            </Col>
            <Col style={{
                padding: "0px"
              }} sm={6} md={3}>
              <NavLink to="/About">
                <div id="fade">
                  <strong>WHO WE ARE</strong>
                </div>
              </NavLink>
            </Col>
            <Col style={{
                padding: "0px"
              }} sm={6} md={3}>
              <NavLink to="/LatestNews">
                <div id="fade">
                  <strong>NEWS & EVENTS</strong>
                </div>
              </NavLink>
            </Col>
          </Row>
        </Container>
      </section>
    </div>);
  };

}

export default HomePage;
