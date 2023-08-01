import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Image } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktitle,
  worktimeline,
  skills,
  services,
  full_name,
  introdata,
} from "../../../content_option";
import { Footer } from "../../footer";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Image
            src={introdata.your_img_url}
            alt="intro"
            className="img-fluid"
            style={{
              width: 225,
              height: 211,
              borderRadius: 220 / 2,
              overflow: "hidden",
              objectFit: "cover",
            }}
          />
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <Col lg="3" className="d-inline">
              <h3 className="color_sec py-4 d-inline mx-auto">
                {introdata.intro} {full_name}{" "}
              </h3>
            </Col>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="3">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="9" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <hr className="t_border my-4 ml-0 text-left" />
        <Row className="sec_sp">
          <Col lg="3">
            <h3 className="color_sec py-4">{worktitle.title}</h3>
          </Col>
          <Col lg="9">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                      <td>{data.abouwork}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <hr className="t_border my-4 ml-0 text-left" />
        <Row className="sec_sp">
          <Col lg="3">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="9">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <hr className="t_border my-4 ml-0 text-left" />
        <Row className="sec_sp">
          <Col lang="3">
            <h3 className="color_sec py-4">Projects</h3>
          </Col>
          <Col lg="9">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
      <Footer />
    </HelmetProvider>
  );
};
