import Card from '../card/Card.jsx';
import React from 'react';
import style from './cards.module.css';
export default function Cards({characters,onClose}) {
   return <div className={style.div}>
      {
      characters.map((characters) =>
         <Card
         id= {characters.id}
         key = {characters.id}
         name = {characters.name}
         species={characters.species}
         gender={characters.gender}
         image={characters.image}
         origin = {characters.origin.name}
         onClose ={onClose}
         />
      
      )
      }
   </div>;
}
