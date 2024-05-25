import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineBehance,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import gif from "../../Assets/234.gif";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
      <Row>
        
          
          <br></br><Col md={2} >
          <div style={{marginTop:"30px"}}>
            <img src={gif} className="project-img" alt="Project" />
          </div>
          </Col>
          <Col md={9} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", padding: "10px", margin: "20px"}}>
            Creating beautiful and functional websites that help businesses grow and thrive in the digital world. &hearts;
            </h1>
            <p className="home-about-body" >
            In my free time, I enjoy learning new technologies and improving my skills. I also love traveling and photographing nature.
            web developer and designer with a strong background in creating interactive and dynamic web applications. Over the years, I have honed my skills in HTML, CSS, JavaScript, React, and Node.js, allowing me to develop solutions that are not only visually appealing but also highly functional. I am passionate about staying up-to-date with the latest industry trends and technologies, ensuring that my clients receive cutting-edge solutions for their web development needs.

In my spare time, I enjoy exploring new technologies, traveling to new places, and capturing the beauty of nature through photography. I believe that continuous learning and personal growth are key to delivering exceptional results in any field, and I strive to incorporate these principles into my work every day.
&hearts;</p>
          </Col>
          <br></br>
          </Row>
          <Row>
          <Col md={12} className="home-about-social">
          
            <h2>FIND ME ON &hearts;</h2>
            <p>
            <p>If you have any questions or proposals, <a href="zahida.yermagambet@narxoz.kz"><span className="purple">feel free to contact me via email:</span></a></p>
              
            </p>
            <p>
              Feel free to <span className="purple">connect </span>with me&hearts;
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/zzaahida"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
              <a
                href="https://www.behance.net/942bb116"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiOutlineBehance />
              </a>
            </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/zahida-yermagambet/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/zzaahida/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
