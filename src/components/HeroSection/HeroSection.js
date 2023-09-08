import React from 'react';
import Wave from 'react-wavify';
import './HeroSection.css';
import { useTypingText } from '../../hooks/useTypingText';
import '../../App.css';

function HeroSection() {
  const { word } = useTypingText(
    [
      'a web developer',
      'a ucla alumnus',
      'a software engineer',
      'your next hire :)',
    ],
    100,
    10,
  );
  return (
    <div className="hero-container">
      <h1>Hey, I'm Cody!</h1>
      <p>I'm {word}</p>

      <Wave
        fill="#f5f5f5"
        paused={false}
        className="hero-wave-back"
        options={{
          height: 25,
          amplitude: 45,
          speed: 0.25,
          points: 4,
        }}
      />

      <Wave
        fill="#f5f5f5"
        paused={false}
        className="hero-wave-mid"
        options={{
          height: 15,
          amplitude: 40,
          speed: 0.2,
          points: 3,
        }}
      />

      <Wave
        fill="#f5f5f5"
        paused={false}
        className="hero-wave-front"
        options={{
          height: 15,
          amplitude: 35,
          speed: 0.4,
          points: 2,
        }}
      />
    </div>
  );
}

export default HeroSection;
