import React from 'react';
import Fade from 'react-reveal/Fade';
import TitleCard from '../TitleCard/TitleCard';
import './Skills.css';

function SkillsSection() {
  return (
    <div class="skills-container">
      <TitleCard text="skills"></TitleCard>
      <div className="skills-section">
        <Fade right cascade duration={1300} fraction={0.4}>
          <div className="skills-list">
            {/* JavaScript */}
            <div className="skill-card">
              <div className="skill-icon">
                <i class="devicon-javascript-plain"></i>
              </div>
              <div className="skill-name">JavaScript</div>
            </div>
            {/* React */}
            <div className="skill-card">
              <div className="skill-icon">
                <i class="devicon-react-original"></i>
              </div>
              <div className="skill-name">ReactJS</div>
            </div>
            {/* Python */}
            <div className="skill-card">
              <div className="skill-icon">
                <i class="devicon-python-plain"></i>
              </div>
              <div className="skill-name">Python</div>
            </div>
            {/* C++ */}
            <div className="skill-card">
              <div className="skill-icon">
                <i class="devicon-cplusplus-plain"></i>
              </div>
              <div className="skill-name">C++</div>
            </div>
            {/* Docker */}
            <div className="skill-card">
              <div className="skill-icon">
                <i class="devicon-docker-plain"></i>
              </div>
              <div className="skill-name">Docker</div>
            </div>
            {/* Java */}
            <div className="skill-card">
              <div className="skill-icon">
                <i class="devicon-java-plain"></i>
              </div>
              <div className="skill-name">Java</div>
            </div>
            {/* Node */}
            <div className="skill-card">
              <div className="skill-icon">
                <i class="devicon-nodejs-plain"></i>
              </div>
              <div className="skill-name">Node</div>
            </div>
            {/* Firebase */}
            <div className="skill-card">
              <div className="skill-icon">
                <i class="devicon-firebase-plain"></i>
              </div>
              <div className="skill-name">Firebase</div>
            </div>
            {/* MongoDB */}
            <div className="skill-card">
              <div className="skill-icon">
                <i class="devicon-mongodb-plain"></i>
              </div>
              <div className="skill-name">MongoDB</div>
            </div>
            {/* Git */}
            <div className="skill-card">
              <div className="skill-icon">
                <i class="devicon-git-plain"></i>
              </div>
              <div className="skill-name">Git</div>
            </div>
            {/* HTML 5*/}
            <div className="skill-card">
              <div className="skill-icon">
                <i class="devicon-html5-plain"></i>
              </div>
              <div className="skill-name">HTML5</div>
            </div>
            {/* CSS */}
            <div className="skill-card">
              <div className="skill-icon">
                <i class="devicon-css3-plain"></i>
              </div>
              <div className="skill-name">CSS</div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default SkillsSection;
