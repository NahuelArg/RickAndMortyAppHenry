import { Link } from 'react-router-dom';
import style from './card.module.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../redux/Actions/actions';

export default function Card({ origin, status, id, species, gender, image, name, onClose }) {
  const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch()
   const myFavorites = useSelector((state)=>state.myFavorites);
 
   const myChar = {
      name: name,
      gender: gender,
      species: species,
      id: id,
      image: image,
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);



   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         dispatch(removeFav(id))
      }else{
         setIsFav(true)
         dispatch(addFav(myChar))
      }
   }
 
  return (
    <div className={style.container}>
      <section className={style.firstSection}>
      {
        isFav ? (
        <button className={style.fav} onClick={handleFavorite}>❤️</button>
         ) : (
        <button className={style.fav} onClick={handleFavorite}>🤍</button>
           )
             }
        <div className={style.imageContainer}>
          <img className={style.image} src={image} alt='' loading="lazy" />
          <button className={style.btn} onClick={() => onClose(id)}>X</button>
        </div>
        <div className={style.name}>
          <Link to={`/detail/${id}`} className={style.link}>{name}</Link>
        </div>
      </section>
      <section className={style.secondSection}>
        <p className={style.data}>{species}</p>
        <p className={style.data}>{gender}</p>
      </section>
    </div>
  );
}