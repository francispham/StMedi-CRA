import React, { Component } from "react";
import {
  Container, Row, Col, UncontrolledCollapse, Button, CardBody, Card,
  TabContent, TabPane, Nav, NavItem, NavLink, 
  // CardTitle, CardText
} from 'reactstrap';
import classnames from 'classnames';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


class BodyFX extends Component {
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
      <div className="BodyFX middle flex-column" style={{paddingTop:"10em"}}>
        <h4 className="display-4">BODY FX</h4>
        <h5 className="display-5">
          NON-INVASIVE BODY CONTOURING & CELLULITE TREATMENT
        </h5>
        <div className="container-fluid">
          <Container fluid style={{ paddingTop: "2em" }} >
            <Row>
              <Col className="middle" sm={12} md={6} style={{ padding:"0px" }}>
                <img src={require('../../../images/TeethCare.png')}
                    style={{ width: "50%" }} alt=""/>
              </Col>
              <Col sm={12} md={6} style={{ padding:"0px" }}>
                <p>
                  Discover a superior solution to improve the
                  appearance of cellulite, reduce dimpled
                  skin, loss of elasticity on the abdomen,
                  love handles, hips, thighs and other
                  areas that require fat reduction.
                </p>
                <p><strong>WHAT IS BODYFX?</strong></p>
                <p>
                  BodyFX is a new, long lasting, non-invasive
                  solution to reduce the unsightly appearance
                  of cellulite. BodyFX will reshape your body
                  to provide a non-surgical alternative to
                  liposuction.
                  BodyFX is the perfect solution to get rid
                  of your mummy tummy or muffin top,and
                  improve your general body contour.
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
                  <p><small>???</small></p>
                </div>
              </Col>
              <Col style={{
                  padding: "0px"
                }} sm={6} md={3}>
                <div>
                  <FontAwesomeIcon icon="home" /> &nbsp;
                  <strong>DownTime</strong>
                  <p><small>None</small></p>
                </div>
              </Col>
              <Col style={{
                  padding: "0px"
                }} sm={6} md={3}>
                <div>
                  <FontAwesomeIcon icon="calendar" /> &nbsp;
                  <strong>Sessions Required</strong>
                  <p><small>8 or more</small></p>
                </div>
              </Col>
              <Col style={{
                padding: "0px"
              }} sm={6} md={3}>
              <div>
                <FontAwesomeIcon icon="meh" /> &nbsp;
                <strong>Discomfort Level</strong>
                <p><small>Fair</small></p>
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
                    HOW DOES BODYFX WORK?
                  </Button>
                  <UncontrolledCollapse toggler="#toggler">
                    <Card>
                      <CardBody>
                        <p>
                          BodyFX uses a combination of different
                          clinically proven modalities including
                          radio-frequency energy, deep tissue heating,
                          and suction coupled negative pressure.
                        </p>
                        <p>
                          The radio-frequency energy distributes heat
                          to the skin and underlying fat, causing the
                          tissues to heat and contract. The vacuum
                          and controlled energy pulses then work
                          synergistically to provide beautiful body
                          shaping results.
                        </p>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
                <div>
                  <Button color="light" id="toggler1" style={{ marginBottom: '1rem' }}>
                    HOW SAFE IS THE TREATMENT?
                  </Button>
                  <UncontrolledCollapse toggler="#toggler1">
                    <Card>
                      <CardBody>
                        <p>
                          A series of radio-frequency energy is
                          delivered by a succession of pulses at 1
                          million cycles per second. While this may
                          sound intense, it is very safe. To maximize
                          comfort, the body’s temperature will be
                          constantly monitored, with ongoing accurate
                          feedback of the skin’s temperature. This
                          thermal monitoring provides the utmost in
                          temperature control.
                        </p>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
                <div>
                  <Button color="light" id="toggler2" style={{ marginBottom: '1rem' }}>
                    DOES IT HURT?
                  </Button>
                  <UncontrolledCollapse toggler="#toggler2">
                    <Card>
                      <CardBody>
                        <p>
                          Most users find BodyFX comfortable. During
                          treatment you can expect a warming of your
                          skin and gentle pulling sensation as the
                          radio-frequency and vacuum work to smooth
                          out unwanted stubborn pockets of fat.
                        </p>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
                <div>
                  <Button color="light" id="toggler3" style={{ marginBottom: '1rem' }}>
                    HOW MANY SESSIONS ARE REQUIRED?
                  </Button>
                  <UncontrolledCollapse toggler="#toggler3">
                    <Card>
                      <CardBody>
                        <p>
                          It is recommended that weekly sessions are
                          performed over an eight week period. Gradual
                          improvements in the treatment area can be
                          seen following the first few treatments – with
                          the skin’s surface feeling smoother and softer
                          immediately.
                        </p>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
                <div>
                  <Button color="light" id="toggler4" style={{ marginBottom: '1rem' }}>
                    WHAT KIND OF POST PROCEDURE CARE IS REQUIRED?
                  </Button>
                  <UncontrolledCollapse toggler="#toggler4">
                    <Card>
                      <CardBody>
                        <p>
                          There is absolutely no downtime for BodyFX.
                          It can be a lunch time procedure. Patients
                          will notice redness and warmth in the treated
                          area which will subside after a few hours. This
                          warmth is equivalent to the sensation felt after
                          a deep tissue massage and will not prevent
                          anyone from their regular activities.
                        </p>
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
                                    style={{ width: "100%" }} alt=""/>
                              </p>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="2">
                          <Row>
                            <Col sm="12">
                              <p>
                                <img src={require('../../../images/TeethMina.jpg')}
                                    style={{ width: "100%" }} alt=""/>
                              </p>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="3">
                          <Row>
                            <Col sm="12">
                              <p>
                                <img src={require('../../../images/TeethKarim.jpg')}
                                    style={{ width: "100%" }} alt=""/>
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
    );
  }
}

export { BodyFX };
