import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineBehance, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import ProjectCard from "../Projects/ProjectCards";
import homeLogo from "../../Assets/123.gif";
import aaImage from "./aa.jpg";
import leaf from "../../Assets/project.png";

const Homepage = () => {
  return (
    <Container fluid className="about-section">
      <Container>
        <div className="project-container">
          <div className="project-card">
            <img src={aaImage} className="project-img" alt="Project" />
            <div className="project-content">
              <h1 className="project-title">&hearts; Welcome to My Portfolio Website &hearts;</h1>
              <p className="project-info">
                <span className="subheading">I am <span className="main-name">Zahida</span>, a web developer and designer.</span>
                <span className="intro">Creating beautiful and functional websites that help businesses grow and thrive in the digital world.</span>
              </p>
            </div>
          </div>
        </div>
          <br></br>
        <Row>
          <br></br>
          <Col md={18} className="home-about-description">
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
          <br></br>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF &hearts;
            </h1>
            <p className="home-about-body">
              <b className="purple"> Hello! </b>
              My name is Zahida. I am a passionate web developer with experience in building
              <i>
                <b className="purple"> interactive and dynamic web applications. &hearts;</b>
              </i>
              <br />
              <br />
              My core skills include &nbsp;
              <i>
                <b className="purple">HTML, CSS, JavaScript, React, </b> and{" "}
                <b className="purple">
                Node.js. &hearts;
                </b>
              </i>
              <br />
              <br />
              I always strive for excellence in my <b className="purple"> work</b> and
              <i>
                <b className="purple">
                  {" "}
                  love
                </b>
              </i>
              &nbsp; solving complex problems. &hearts;
            </p>
          </Col>
          <Col md={4} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
        </Row>
        <Container>
          <h1 className="project-heading">
          My<strong className="purple"> Projects&hearts;</strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="task11"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/zzaahida/task11"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="task10"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/zzaahida/task10"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="task9"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/zzaahida/task9"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="task8"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/zzaahida/task8"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="task7"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/zzaahida/task7"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="task6"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/zzaahida/task6"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="task5"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/zzaahida/task5"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="task4"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/zzaahida/task4"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="task3"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/zzaahida/task3"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="task2"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/zzaahida/task2"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="WebProject"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/zzaahida/WebProject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="finalProject"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/zzaahida/finalProject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="LaravelShopProject"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/zzaahida/LaravelShopProject"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="django_project"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/zzaahida/django_project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="rock-paper-scissors"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/zzaahida/rock-paper-scissors"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="kinopoisk"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/zzaahida/kinopoisk"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="starwars"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/zzaahida/starwars"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="LaravelProject"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/zzaahida/LaravelProject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="demo-app"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/zzaahida/demo-app"
            />
          </Col>
        </Row>
        </Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON &hearts;</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me &hearts;
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
};

export default Homepage;

  