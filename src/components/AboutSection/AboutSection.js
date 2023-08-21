import React from 'react';
import './AboutSection.css';
import Fade from 'react-reveal/Fade';
import TitleCard from '../TitleCard/TitleCard';

function AboutSection() {
  return (
    <div className="about">
      <TitleCard text="about" />
      <div className="primary_container">
        <Fade>
          <img
            src="images/about.jpeg"
            alt="portrait"
            title="Cody Do"
            className="img_container"
          />
          <div className="text_wrapper">
            <h1 className="title_container">Hey there! 👋</h1>
            <h3 className="description_container">
              I'm Cody Do, a graduate from UCLA with a degree in Computer
              Science! My past roles in campus and professional organizations
              have fostered my skills as a full-stack developer, though I have a
              strong preference for front-end development. I'm enthusiastic
              about my work, eager to tackle issues, and determined to create an
              impact. With my aid, projects have been efficiently completed on
              schedule and within budget.
              <br /> <br />
              In my free time, I enjoy hiking, reading, and music. I'm always
              down to try something new! Wanna chat? Shoot me a message!
            </h3>

            <div className="contact-container">
              <a
                className={`res-btn res-btn--outline res-btn--large`}
                href="files/CodyDo_Resume.pdf"
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                Resume
              </a>

              {/* Row of Contact Icons */}
              <div className="icon-row">
                <a
                  className="icon-link-wrapper"
                  href="https://github.com/CodyDo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="icon-wrapper"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>

                <a
                  className="icon-link-wrapper"
                  href="https://www.linkedin.com/in/cody-do/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="icon-wrapper"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 192 192"
                  >
                    <path d="M156,0h-120c-19.875,0 -36,16.125 -36,36v120c0,19.875 16.125,36 36,36h120c19.875,0 36,-16.125 36,-36v-120c0,-19.875 -16.125,-36 -36,-36zM59.36539,162.98077h-29.82693l-0.17307,-89.30769h29.82692zM43.70192,61.99038h-0.17308c-9.75,0 -16.03846,-6.72115 -16.03846,-15.08653c0,-8.56731 6.49039,-15.0577 16.41347,-15.0577c9.92308,0 16.00961,6.49038 16.21153,15.0577c0,8.36538 -6.31731,15.08653 -16.41346,15.08653zM162.77885,162.98077h-30.08654v-48.51923c0,-11.74039 -3.11538,-19.73077 -13.61538,-19.73077c-8.01923,0 -12.34615,5.39423 -14.42308,10.61538c-0.77885,1.875 -0.98077,4.44231 -0.98077,7.06731v50.56731h-30.23077l-0.17308,-89.30769h30.23077l0.17308,12.60577c3.86538,-5.97116 10.29808,-14.42308 25.70192,-14.42308c19.09616,0 33.37501,12.46154 33.37501,39.25961v51.86539z"></path>
                  </svg>
                </a>

                <a
                  className="icon-link-wrapper"
                  href="https://www.instagram.com/codehduh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="icon-wrapper"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default AboutSection;
