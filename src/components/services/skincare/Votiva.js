import React, { Component } from "react";
import {
  Container, Row, Col, UncontrolledCollapse, Button, CardBody, Card,
  TabContent, TabPane, Nav, NavItem, NavLink, CardTitle, CardText
} from 'reactstrap';
import classnames from 'classnames';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


class Votiva extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render () {
    return (
      <div className="Votiva middle flex-column" style={{paddingTop:"10em"}}>
        <h4 className="display-4">VOTIVA</h4>
        <h5 className="display-5">
          A SAFE AND EFFECTIVE TREATMENT FOR FEMININE HEALTH & SEXUAL DYSFUNCTION
        </h5>
        <div className="container-fluid">
          <Container fluid style={{ paddingTop: "2em" }} >
            <Row>
              <Col className="middle" sm={12} md={6} style={{ padding:"0px" }}>
                <img src={require('../../../images/TeethCare.png')}
                    style={{ width: "50%" }}/>
              </Col>
              <Col sm={12} md={6} style={{ padding:"0px" }}>
                <p>
                  Previously, women did not have many options to improve intimate
                  issues that occur from childbirth or aging. Now, with new
                  technologies available, women have more options to resolve their
                  discomfort. There are new choices that are effective, easy and painless.
                  The time has come for a safe and effective treatment that is
                  quick and comfortable. Votiva offers solutions that address
                  internal and external vaginal health concerns, with clinically
                  proven feminine wellness technologies.
                </p>

                <p><strong>COMMON FEMININE HEALTH CONCERNS:</strong></p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;• Laxity and wrinkled appearance of the labia and vulva</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;• Low blood flow and sensitivity</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;• Pain sensation caused by labial hypertrophy</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;• Level of sexual interest and self-esteem</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;• Weakening of the vaginal muscles</p>
                <p><strong>WHAT IS VOTIVA?</strong></p>
                <p>
                  InMode’s Votiva system is a safe, effective treatment for feminine
                  health that offers immediate results with continued
                  improvements over time.
                </p>
                <br/>
                <p>Contact us to schedule your appointment today! </p>
              </Col>
            </Row>
          </Container>
        </div>

        <section id="information" className="container-fluid color">
          <Container fluid style={{
              paddingTop: "5em"
            }}>
            <Row>
              <Col style={{
                  padding: "0px"
                }} sm={6} md={3}>
                <div>
                  <FontAwesomeIcon icon="user-clock" /> &nbsp;
                  <strong>Treatment Time</strong>
                  <p><small> ~40 minutes</small></p>
                </div>
              </Col>
              <Col style={{
                  padding: "0px"
                }} sm={6} md={3}>
                <div>
                  <FontAwesomeIcon icon="home" /> &nbsp;
                  <strong>DownTime</strong>
                  <p><small>Little</small></p>
                </div>
              </Col>
              <Col style={{
                  padding: "0px"
                }} sm={6} md={3}>
                <div>
                  <FontAwesomeIcon icon="calendar" /> &nbsp;
                  <strong>Sessions Required</strong>
                  <p><small>2 - 3</small></p>
                </div>
              </Col>
              <Col style={{
                padding: "0px"
              }} sm={6} md={3}>
              <div>
                <FontAwesomeIcon icon="meh" /> &nbsp;
                <strong>Discomfort Level</strong>
                <p><small>Slight</small></p>
              </div>
            </Col>
            </Row>
          </Container>
        </section>

        <div className="container-fluid">
          <Container fluid style={{ padding: "5em" }}>
            <Row>
              <Col className="middle flex-column" sm={12} md={6} style={{ padding:"0px" }}>
                <h4>FAQ</h4>
              </Col>
              <Col className="middle" sm={12} md={6} style={{ padding:"0px" }}>
                <h4>BEFORE & AFTER</h4>
              </Col>
            </Row>
            <Row>
              <Col className="FAQ">
                <div>
                  <Button color="light" id="toggler0" style={{ marginBottom: '1rem' }}>
                    HOW DOES VOTIVA WORK?
                  </Button>
                  <UncontrolledCollapse toggler="#toggler0">
                    <Card>
                      <CardBody>
                        <p>
                          Votiva uses up to two complimentary
                          technologies to address the internal and
                          external areas of discomfort or concern.
                        </p>
                        <p>
                          • <strong>FormaV</strong> – Gentle thermal tissue remodeling
                        </p>
                        <p>
                          • <strong>FractoraV</strong> – Fractional radio-frequencycontraction
                        </p>
                        <p>
                          During a pre-consultation, your physician will
                          speak to you regarding your concerns and
                          expectations. At this time, they will develop
                          a tailored treatment plan that can include
                          either internal or external treatment, or both.
                        </p>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
                <div>
                  <Button color="light" id="toggler" style={{ marginBottom: '1rem' }}>
                    WHAT CAN I EXPECT?
                  </Button>
                  <UncontrolledCollapse toggler="#toggler">
                    <Card>
                      <CardBody>
                        Patients can expect to feel a heating
                        sensation during treatment. Results can be
                        felt and seen immediately, with continued
                        results over the following weeks or multiple
                        treatments.
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
                <div>
                  <Button color="light" id="toggler1" style={{ marginBottom: '1rem' }}>
                    WHAT IS THE DOWNTIME?
                  </Button>
                  <UncontrolledCollapse toggler="#toggler1">
                    <Card>
                      <CardBody>
                        Depending on the intensity of the
                        treatment, there is little to no downtime.
                        Most patients may have slight discomfort
                        during and immediately after treatment.
                        Some patients will experience no discomfort
                        at all.
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
                <div>
                  <Button color="light" id="toggler2" style={{ marginBottom: '1rem' }}>
                    HOW MANY SESSIONS ARE REQUIRED?
                  </Button>
                  <UncontrolledCollapse toggler="#toggler2">
                    <Card>
                      <CardBody>
                        Your physician will determine the best
                        treatment plan for you. The majority of
                        patients have 2-3 sessions, however, most
                        notice a difference after only 1 treatment.
                        The number of sessions depends on your
                        treatment concerns, your personal goals, and
                        if you plan to use a combination treatment or
                        a single treatment approach.
                        at all.
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
              </Col>
              <Col>
                <div>
                  <Nav tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '1' })}
                        onClick={() => { this.toggle('1'); }}
                        >
                          Client I
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: this.state.activeTab === '2' })}
                          onClick={() => { this.toggle('2'); }}
                          >
                            Client II
                          </NavLink>
                        </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({ active: this.state.activeTab === '3' })}
                          onClick={() => { this.toggle('3'); }}
                          >
                            Client III
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                          <Row>
                            <Col sm="12">
                              <p>
                                <img src={require('../../../images/TeethAlvin.jpg')}
                                    style={{ width: "100%" }}/>
                              </p>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="2">
                          <Row>
                            <Col sm="12">
                              <p>
                                <img src={require('../../../images/TeethMina.jpg')}
                                    style={{ width: "100%" }}/>
                              </p>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="3">
                          <Row>
                            <Col sm="12">
                              <p>
                                <img src={require('../../../images/TeethKarim.jpg')}
                                    style={{ width: "100%" }}/>
                              </p>
                            </Col>
                          </Row>
                        </TabPane>
                      </TabContent>
                    </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export { Votiva };
