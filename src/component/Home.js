import React from "react";
import Header from "./Header";
import "../style/Home.css";
function Home() {
  return (
    <div className="home">
      <div className="home_h">
        <Header />
      </div>
      <div className="home_body">
        <div className="home_1">
          <div className="home_1_info">
            <div className="done">
              <div className="name_text1">
                <name>Hi! I Am </name>
                <button>ui/ux</button>
              </div>
              <div className="name_text2">
                <name>Nithishkumar</name>
              </div>
              <div className="description">
                <p>
                  Designing user inteface for over <h>2 years</h> as a web
                  developer
                </p>
              </div>
              <div className="hireme_pro-b">
                <button>Hire Me</button>
                <a> project</a>
              </div>
              <div className="projectdone_contact">
                <div className="project_info">
                  <number>+10</number>
                  <name>
                    Web Apps <span>Clone</span>
                  </name>
                </div>

                <div className="project_contact">
                  <div className="project_info">
                    <number>10</number>
                    <name> Project</name>
                  </div>
                  <div className="contact_info">
                    <p>Contact </p>
                    <email>bnithishbtech@gmail.com</email>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home_1_info2">fayayan</div>
        </div>
        <div className="home_2">data2</div>
      </div>
    </div>
  );
}

export default Home;
