import React, { Component } from "react";
import {
  Container, Row, Col, UncontrolledCollapse, Button, CardBody, Card,
  TabContent, TabPane, Nav, NavItem, NavLink, CardTitle, CardText
} from 'reactstrap';
import classnames from 'classnames';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


class Fractora extends Component {
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
      <div className="Fractora middle flex-column" style={{paddingTop:"10em"}}>
        <h4 className="display-4">FRACTORA</h4>
        <h5 className="display-5">REJUVENATE & RESTORE YOUR SKIN</h5>
        <div className="container-fluid">
          <Container fluid style={{ paddingTop: "2em" }} >
            <Row>
              <Col className="middle" sm={12} md={6} style={{ padding:"0px" }}>
                <img src={require('../../../images/TeethCare.png')}
                    style={{ width: "50%" }}/>
              </Col>
              <Col sm={12} md={6} style={{ padding:"0px" }}>
                <p>
                  Discover a superior solution to decrease
                  wrinkles, improve skin complexion, reduce
                  skin irregularities (including acne/acne
                  scars) and provide a healthier younger
                  looking you, all in one session.
                </p>
                <p>
                  Fractora skin treatment is a fractional
                  rejuvenation and resurfacing treatment
                  that reduces wrinkles to slow the effects
                  of aging and restore skin to its youthful
                  appearance. Fractora lets you look and
                  feel younger.
                </p>
                <p>
                  Fractora can be used on any areas that
                  can benefit from skin renewal. The
                  most commonly treated areas include:
                  lower eyelid, upper eyelid, smile lines,
                  forehead, cheeks, mouth and neck. Face
                  and body areas that exhibit wrinkles,
                  discoloration or acne scarring are suitable
                  for treatment.
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
                  <p><small>Minimal</small></p>
                </div>
              </Col>
              <Col style={{
                  padding: "0px"
                }} sm={6} md={3}>
                <div>
                  <FontAwesomeIcon icon="calendar" /> &nbsp;
                  <strong>Sessions Required</strong>
                  <p><small>1 - 6</small></p>
                </div>
              </Col>
              <Col style={{
                padding: "0px"
              }} sm={6} md={3}>
              <div>
                <FontAwesomeIcon icon="meh" /> &nbsp;
                <strong>Discomfort Level</strong>
                <p><small>None</small></p>
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
              <Col>
                <div>
                  <Button color="light" id="toggler" style={{ marginBottom: '1rem' }}>
                    HOW QUICKLY WILL I SEE RESULTS?
                  </Button>
                  <UncontrolledCollapse toggler="#toggler">
                    <Card>
                      <CardBody>
                        Visible results can be seen immediately, but
                        typically after two weeks the most noticeable
                        results appear. Improvements continue up to
                        three months after treatment.
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
                <div>
                  <Button color="light" id="toggler1" style={{ marginBottom: '1rem' }}>
                    WHAT IS THE BENEFIT OF FRACTIONATED ENERGY?
                  </Button>
                  <UncontrolledCollapse toggler="#toggler1">
                    <Card>
                      <CardBody>
                        Fractionated RF energy found in Fractora is
                        a scientifically proven method to reduce wrinkles.
                        It is minimally invasive, using a matrix of
                        micro pins to resurface and restore the skin,
                        providing exceptional results with almost no
                        patient downtime.
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
                <div>
                  <Button color="light" id="toggler2" style={{ marginBottom: '1rem' }}>
                    CAN ANYONE USE FRACTORA?
                  </Button>
                  <UncontrolledCollapse toggler="#toggler2">
                    <Card>
                      <CardBody>
                        The benefit of Fratcora’s color blind technology
                        is that it can be used on all skin types. The unique
                        properties allow even darker tones to receive
                        treatment
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
                <div>
                  <Button color="light" id="toggler3" style={{ marginBottom: '1rem' }}>
                    WHAT IS THE BENEFIT OF RF ENERGY?
                  </Button>
                  <UncontrolledCollapse toggler="#toggler3">
                    <Card>
                      <CardBody>
                        RF energy heats the deep layers of the skin in
                        a controlled way to revitalize the collagen. The
                        treatment will improve skin complexion and
                        texture for a more radiant and youthful
                        appearance.
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
                <div>
                  <Button color="light" id="toggler4" style={{ marginBottom: '1rem' }}>
                    CAN THIS BE USED IN COMBINATION WITH OTHER TREATMENTS?
                  </Button>
                  <UncontrolledCollapse toggler="#toggler4">
                    <Card>
                      <CardBody>
                        Yes, Fractora can be used in the same
                        treatment session, or a few days after other
                        treatments. Fractora can also be combined
                        with additional energy treatments or
                        injectables to achieve a more extensive full
                        face result, called a FracTotal Facial.
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
                <div>
                  <Button color="light" id="toggler5" style={{ marginBottom: '1rem' }}>
                    WHEN CAN I PUT MAKE-UP ON AFTER TREATMENT?
                  </Button>
                  <UncontrolledCollapse toggler="#toggler5">
                    <Card>
                      <CardBody>
                        Since patient downtime is minimal, makeup
                        can be applied 1 to 2 days after the treatment.
                        Patients should expect to see micro lesions a
                        few days after treatment and slight redness for
                        up to 1 week depending on treatment
                        parameters.
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
                <div>
                  <Button color="light" id="toggler6" style={{ marginBottom: '1rem' }}>
                    WHAT KIND OF POST PROCEDURE CARE IS REQUIRED?
                  </Button>
                  <UncontrolledCollapse toggler="#toggler6">
                    <Card>
                      <CardBody>
                        Patients should moisturize the treatment
                        area and avoid direct sun exposure. It is also
                        recommended that patients use a good, broad
                        spectrum sunscreen every day. In addition
                        to reducing their future risk of skin cancer,
                        sunscreens also reduce wrinkles and slow the
                        aging process.
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

export { Fractora };
