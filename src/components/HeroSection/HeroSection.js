import React from 'react';
import './HeroSection.css';
import '../../App.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='videos/video-1.mp4' autoPlay loop muted />
      <h1>CODY DO</h1>
      <p>Software Engineer</p>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          linkTo='#aboutMe'
        >
          Who am I?
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          linkTo='files/CodyDo_Resume.pdf'
        >
          Resume
        </Button>
        <a
          className={`btn btn--outline btn--large`}
          href='files/CodyDo_Resume.pdf'
          target='_blank'
          style={{ textDecoration: 'none' }}
        >
          Resume
        </a> */}
      </div>
    </div>
  );
}

export default HeroSection;
