import React, { Component } from 'react';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle,
  CardSubtitle, Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom'


class Skincare extends Component {
  render () {
    return (
      <div className="Skincare middle flex-column" style={{
        paddingTop:"10em",
        paddingBottom:"10em"
      }}>
        <section className="container-fluid">
          <h3 className="display-3 middle">SKINCARE</h3>
          <Container fluid id="skincare" style={{
              paddingTop: "1em"
            }}>
            <Row>
              <Col style={{
                  padding: "5px"
                }} sm={6} md={3}>
                  <Card>
                    <NavLink to="/Votiva">
                      <CardImg top width="100%"
                        src={require('../../images/Votiva_edited_sunray.jpg')}
                        alt="Card image cap"
                      />
                    </NavLink>
                    <CardBody>
                      <CardTitle>VOTIVA</CardTitle>
                      <CardText>
                        Gentle and effective treatment for feminine health that
                        offers immediate results with continued improvement over time.
                      </CardText>
                    </CardBody>
                  </Card>
              </Col>
              <Col style={{
                  padding: "5px"
                }} sm={6} md={3}>
                  <Card>
                    <NavLink to="/BodyFX">
                      <CardImg top width="100%"
                        src={require('../../images/bodyFX1.jpg')}
                        alt="Card image cap"
                      />
                    </NavLink>
                    <CardBody>
                      <CardTitle>BODY FX</CardTitle>
                      <CardText>
                        New, long lasting, non-invasive solution to
                        reduce the unsightly appearance of cellulite,
                        reshape your body to provide a non-surgical alternative to liposuction.
                      </CardText>
                    </CardBody>
                  </Card>
              </Col>
              <Col style={{
                  padding: "5px"
                }} sm={6} md={3}>
                  <Card>
                    <NavLink to="/FormaPlus">
                      <CardImg top width="100%"
                        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                        alt="Card image cap"
                      />
                    </NavLink>
                    <CardBody>
                      <CardTitle>FORMA PLUS</CardTitle>
                      <CardText>
                        A safe and comfortable non-surgical solution to
                        refine and reverse skin laxity.
                      </CardText>
                    </CardBody>
                  </Card>
              </Col>
              <Col style={{
                  padding: "5px"
                }} sm={6} md={3}>
                  <Card>
                    <NavLink to="/Fractora">
                      <CardImg top width="100%"
                        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                        alt="Card image cap"
                      />
                    </NavLink>
                    <CardBody>
                      <CardTitle>FRACTORA</CardTitle>
                      <CardText>
                        Rejuvenate & Restore your skin. Safe, gentle and
                        effective skin treatment 
                      </CardText>
                    </CardBody>
                  </Card>
              </Col>
            </Row>
            <Row>
              <Col style={{
                  padding: "5px"
                }} sm={6} md={3}>
                  <Card>
                    <CardImg top width="100%"
                      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>Skin Exfoliations</CardTitle>
                      <CardText>

                      </CardText>
                    </CardBody>
                  </Card>
              </Col>
              <Col style={{
                  padding: "5px"
                }} sm={6} md={3}>
                  <Card>
                    <CardImg top width="100%"
                      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>Skin Tightening</CardTitle>
                      <CardText>

                      </CardText>
                    </CardBody>
                  </Card>
              </Col>
              <Col style={{
                  padding: "5px"
                }} sm={6} md={3}>
                  <Card>
                    <CardImg top width="100%"
                      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>Dermalese</CardTitle>
                      <CardText>
                        The Skin Rejuvenation treatment helps reduce and heal
                        several skin issues
                      </CardText>
                    </CardBody>
                  </Card>
              </Col>
              <Col style={{
                  padding: "5px"
                }} sm={6} md={3}>
                  <Card>
                    <CardImg top width="100%"
                      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>IPL Hair Removal</CardTitle>
                      <CardText>
                      </CardText>
                    </CardBody>
                  </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    )
  }
}

export { Skincare };
