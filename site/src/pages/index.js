import React from "react"
import Content from "../components/content";
import Layout from '../components/layout';
import { StaticImage } from "gatsby-plugin-image"

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
       <p>
          <div className="light fade-in">Hi there,</div>
          <br/>
          <div className="classic fade-in">I'm Cristian.</div>
          <br/>
          <div className="label fade-in">Backend Software Developer</div>
          <br/>
          <div className="dry fade-in">Mendoza, Argentina.</div>
          <br/>
        </p>
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        <h3 id="skills">My Skills</h3>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </Content>
      <Content style={aboutStyle}>
        <h2 id="projects">What I've been working on</h2>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </Content>
      <Content style={aboutStyle}>
        <h2 id="contact">Let's build something together</h2>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </Content>
    </Layout>
  )
};

export default IndexPage;
