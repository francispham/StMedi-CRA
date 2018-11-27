import React, { Component } from 'react';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle,
  // CardSubtitle, Button
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
          <div style={{padding: "3em"}}>
            <p>
              Renew your appearance with ST Medi Spa Skincare! ST Medi Spa is a
              medical spa that uses the latest technology to affordably and
              effectively remove hair, treat acne, reduce wrinkles and restore
              youthful skin.
            </p>
            <p>
              ST Medi Spa services are administered by licensed aestheticians and
              use fully FDA-approved equipment. A licensed medical aesthetician is
              available for personal consultation upon request.
            </p>
          </div>
          <Container fluid id="skincare" style={{
              paddingTop: "1em"
            }}>
            <Row>
              <Col style={{
                  padding: "5px"
                }} sm={6} md={3}>
                <NavLink to="/Votiva">
                  <Card>
                      <CardImg top width="100%"
                        src={require('../../images/Votiva_edited_sunray.jpg')}
                        alt="Card image cap"
                      />
                    <CardBody>
                      <CardTitle>VOTIVA</CardTitle>
                      <CardText>
                        Gentle and effective treatment for feminine health that
                        offers immediate results with continued improvement over time.
                      </CardText>
                    </CardBody>
                  </Card>
                </NavLink>
              </Col>
              <Col style={{
                  padding: "5px"
                }} sm={6} md={3}>
                <NavLink to="/BodyFX">
                  <Card>
                      <CardImg top width="100%"
                        src={require('../../images/bodyFX1.jpg')}
                        alt="Card image cap"
                      />
                    <CardBody>
                      <CardTitle>BODY FX</CardTitle>
                      <CardText>
                        New, long lasting, non-invasive solution to
                        reduce the unsightly appearance of cellulite,
                        reshape your body to provide a non-surgical alternative to liposuction.
                      </CardText>
                    </CardBody>
                  </Card>
                </NavLink>
              </Col>
              <Col style={{
                  padding: "5px"
                }} sm={6} md={3}>
                <NavLink to="/FormaPlus">
                  <Card>
                      <CardImg top width="100%"
                        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                        alt="Card image cap"
                      />
                    <CardBody>
                      <CardTitle>FORMA PLUS</CardTitle>
                      <CardText>
                        A safe and comfortable non-surgical solution to
                        refine and reverse skin laxity.
                      </CardText>
                    </CardBody>
                  </Card>
                </NavLink>
              </Col>
              <Col style={{
                  padding: "5px"
                }} sm={6} md={3}>
                <NavLink to="/Fractora">
                  <Card>
                      <CardImg top width="100%"
                        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                        alt="Card image cap"
                      />
                    <CardBody>
                      <CardTitle>FRACTORA</CardTitle>
                      <CardText>
                        Rejuvenate & Restore your skin. Safe, gentle and
                        effective skin treatment
                      </CardText>
                    </CardBody>
                  </Card>
                </NavLink>
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
          <div style={{padding: "3em"}}>
            <p>
              Adore the skin you’re in! At ST Medi Spa we’re professionals and can
              help you to choose the right skin care treatments and products for your
              individual needs. Photo-facials, chemical peels, facials and the right
              skin care products can help you to keep your skin looking its best.
            </p>
            <p className="middle">
              To book your free consultation, contact us by phone or email.
            </p>
          </div>
        </section>
      </div>
    )
  }
}

export { Skincare };
