import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Some of my Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/harmony-project.png'
              text='Partnered with Harmony Project to produce a cross-platform application that connects children in underserved communities with music.'
              label='JavaScript (React Native)'
              path='https://github.com/lablueprint/harmony-project'
              title='Harmony Project'
            />
            <CardItem
              src='images/simple-shell.png'
              text='A lightweight shell that is capable of I/O indirection, bash command execution, and spawning child processes.'
              label='C'
              path='https://github.com/CodyDo/CS-111/tree/master/lab1b'
              title='Simple Shell'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/kontagion.png'
              text='A program where the player moves around a circular dish, gaining points by attacking and avoiding various creatures.'
              label='C++'
              path='https://github.com/CodyDo/CS-32/tree/master/Project%203'
              title='Kontagion'
            />
            <CardItem
              src='images/goober-eats.png'
              text='A program using real-world map data that simulates the successful creation and delivery of an online order using A* traversal and a hashmap data structure.'
              label='C++'
              path='https://github.com/CodyDo/CS-32/tree/master/Project%204'
              title='GooberEats'
            />
            <CardItem
              src='images/rpg-fighter.png'
              text='A text-based interactive game where players can travel to various maps, fight monsters, and keep an inventory.'
              label='Python'
              path='https://github.com/CodyDo'
              title='RPG Fighter'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
