import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Content from "../components/content";
import Layout from '../components/layout';

function ProfileImage() {
  return (
    <div className="profile frame">
        <StaticImage
          className="circle fade-in"
          src="../images/profile.jpg"
          alt="Cristian Moyano"
        />
    </div>
  )
}

function GreetingInfo() {
  return (
    <div className="greeting">
          <div className="light fade-in">Hi there,</div>
          <br/>
          <div className="fade-in hero">I'm Cristian.</div>
          <br/>
          <div className="label gradient-box fade-in">Backend Software Developer</div>
          <br/>
          <div className="dry fade-in">Mendoza, Argentina.</div>
          <br/>
    </div>
  )
}


const IndexPage = ({ data }) => {
  const greetingStyle = {
    backgroundColor: 'black',
    color: 'white',
  };
  const aboutStyle = {
    backgroundColor: 'black',
    color: 'white',
  };
  return (
    <Layout>
      <Content style={greetingStyle}>
        <div className="wrapper">
          <div className="one">
            <GreetingInfo />
          </div>  
          <div className="two">
            <ProfileImage />
          </div>
        </div>
      </Content>
      <Content style={aboutStyle}>
        <h2 id="about">About me</h2>
        <p>
        Hi there, I’m Cristian Moyano! I love to solve problems by programming. I'm a backend software developer from Mendoza, Argentina.
        </p>
        <br/>
        <p>
        During the last years I worked as a Software Engineer II at Eventbrite, working on the Post Transaction team. The mission of the team is to improve and maintain the post-purchase experience (refunds, chargebacks) of our clients.
    
        </p>
        <h3 id="skills">My Skills</h3>
        Through the last years, I've dealt with great challenges and I've gained a solid understanding of web development concepts. Also, I've learn good development practices to build high-quality, scalable, and performance code.
        Therefore whenever I can, I try to apply these concepts to real-world scenarios at my job.
        <br/><br/>

        <div className="grid-container">
          <div className="grid-item">Git</div>
          <div className="grid-item">Python</div>
          <div className="grid-item">Django</div>  
          <div className="grid-item">PHP</div>
          <div className="grid-item">CakePHP</div>
          <div className="grid-item">Redis</div>  
          <div className="grid-item">Celery</div>
          <div className="grid-item">Javascript</div>
          <div className="grid-item">React</div>
          <div className="grid-item">MySQL</div>
        </div>
      </Content>
      <Content style={aboutStyle}>
        <h2 id="projects">What I've been working on</h2>
        This section is working in progress. Meanwhile, you can take a look to my <a rel="noreferrer" className="contact" target="_blank" href="https://www.linkedin.com/in/cristian-moyano/">Linkedin</a> profile.
      </Content>
      <Content style={aboutStyle}>
        <h2 id="contact">Let's build something together</h2>
        Feel free to reach me out if you're looking for a developer, have a question, or just want to connect.
        <br/><br/>
        <a rel="noreferrer" className="contact" href="mailto:cristianmoyano.mza@gmail.com">cristianmoyano.mza@gmail.com</a>
      </Content>
    </Layout>
  )
};

export default IndexPage;
