import React from 'react';
import '../../App.css';
import Cards from '../Cards';

function Projects() {
  return (
    <div id='projects'>
      <div
        style={{
          background: 'black',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className='projects'>Projects</h1>
      </div>
      <Cards />
    </div>
  );
}

export default Projects;
