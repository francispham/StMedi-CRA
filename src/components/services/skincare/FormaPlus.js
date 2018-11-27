import React, { Component } from "react";
import {
  Container, Row, Col, UncontrolledCollapse, Button, CardBody, Card,
  TabContent, TabPane, Nav, NavItem, NavLink, 
  // CardTitle, CardText
} from 'reactstrap';
import classnames from 'classnames';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


class FormaPlus extends Component {
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
      <div className="FormaPlus middle flex-column" style={{paddingTop:"10em"}}>
        <h4 className="display-4">FORMA PLUS</h4>
        <h5 className="display-5">
          A SAFE AND COMFORTABLE NON-SURGICAL SOLUTION TO REFINE AND REVERSE
          SKIN LAXITY.
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
                  Plus uses fractionated radio-frequency
                  energy to stimulate collagen production for
                  body remodeling. After Plus treatments you
                  can achieve a more youthful and
                  toned skin contour making your body
                  appear smoother, sexier and younger.
                </p>
                <p>
                  Plus is recommended for individuals who are
                  looking for a non-invasive skin treatment
                  to address targeted areas that require
                  contraction. Plus can be used to reduce
                  texture irregularities in lax skin to provide a
                  lifted appearance. Plus is safe and can be used
                  on all skin types and tones.
                </p>
                <p>
                  During treatment most patients will feel a
                  heat sensation and “feel” tighter. Over time
                  patients typically notice a reduction in the
                  folds of their skin leading to a smoother
                  contour of the body. Textural irregularities will
                  even out and sagging skin will appear more
                  toned.
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
                  <p><small>???????</small></p>
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
                  <p><small>6 - 8</small></p>
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
                    HOW DOES PLUS WORK?
                  </Button>
                  <UncontrolledCollapse toggler="#toggler">
                    <Card>
                      <CardBody>
                        Plus was created and based on the
                        development and clinical success of the
                        proprietary A.C.E. (Acquire, Control and
                        Extend) technology. A.C.E. technology
                        targets deep within the skin to ensure that
                        no areas are under, or over-treated, thereby
                        maximizing results and providing consistent outcomes.
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
                <div>
                  <Button color="light" id="toggler1" style={{ marginBottom: '1rem' }}>
                    WHAT AREAS CAN BE TREATED?
                  </Button>
                  <UncontrolledCollapse toggler="#toggler1">
                    <Card>
                      <CardBody>
                        Plus can be used on parts of the body that
                        may need contraction after the effects of
                        weight gain/loss or general aging. Most common
                        areas of treatment include the abdomen,
                        arms (bat wings), inner thighs, outer thighs,
                        back fat and knees.
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </div>
                <div>
                  <Button color="light" id="toggler2" style={{ marginBottom: '1rem' }}>
                    WILL IT HURT
                  </Button>
                  <UncontrolledCollapse toggler="#toggler2">
                    <Card>
                      <CardBody>
                        Plus is essentially painless and has no
                        downtime; it feels like a hot stone massage.
                        Patients may see slight redness in the treated
                        area, which will lessen within a few hours.
                        All patients are able to return to their daily
                        activities immediately after treatment.
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
                        Typically, weekly sessions are recommended
                        over a six to eight week period. Individuals
                        with mild laxity may be treated in fewer
                        sessions with more weeks between each
                        treatment. Scheduling should be based on a
                        pre-evaluation. Best results will be noticed
                        over time or after a series of treatments.
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

export { FormaPlus };
