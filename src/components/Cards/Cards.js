import React from 'react';
import CardItem from './CardItem';
import Fade from 'react-reveal/Fade';
import './Cards.css';
import TitleCard from '../TitleCard/TitleCard';

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <TitleCard text="projects" />
          <Fade bottom duration={1300} fraction={0.2}>
            <ul className="cards__items">
              <CardItem
                src="images/harmony-project.png"
                text="Partnered with Harmony Project to produce a cross-platform application using React Native, connecting children in underserved communities with music."
                label="JavaScript"
                path="https://github.com/lablueprint/harmony-project"
                title="Harmony Project"
              />
              <CardItem
                src="images/doodle-jump.png"
                text="A basic recreation of the classic Doodle Jump game. Built in JavaScript using the p5.js library."
                label="JavaScript"
                path="https://github.com/CodyDo/doodle-jump"
                title="Doodle Jump"
                gameLink="https://codydo.github.io/doodle-jump"
              />
              <CardItem
                src="images/genome.png"
                text="Python algorithm written in Colab that takes in known and unknown chromosomal FASTA data, producing statistical information based on matches."
                label="Python"
                path="https://drive.google.com/drive/folders/1yLDm1E8DlCrb1FDm5xAg1ivjiZlUdvuc?usp=sharing"
                title="Genomic Comparator"
              />
            </ul>
          </Fade>
          <Fade bottom fraction={0.5}>
            <ul className="cards__items">
              <CardItem
                src="images/kontagion.png"
                text="A program where the player moves around a circular dish, gaining points by attacking and avoiding various creatures."
                label="C++"
                path="https://github.com/CodyDo/CS-32/tree/master/Project%203"
                title="Kontagion"
              />
              <CardItem
                src="images/goober-eats.png"
                text="A program using real-world map data that simulates the successful creation and delivery of an online order using A* traversal and a hashmap data structure."
                label="C++"
                path="https://github.com/CodyDo/CS-32/tree/master/Project%204"
                title="Goober Eats"
              />
              <CardItem
                src="images/simple-shell.png"
                text="A lightweight shell that is capable of I/O indirection, bash command execution, and spawning child processes."
                label="C"
                path="https://github.com/CodyDo/CS-111/tree/master/lab1b"
                title="Simple Shell"
              />
            </ul>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Cards;
