import { Link } from 'react-router-dom';
import style from './card.module.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../redux/Actions/actions';

export default function Card({ origin, status, id, species, gender, image, name, onClose, fav}) {
  const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch()
   const myFavorites = useSelector((state)=>state.myFavorites);
 
   const myChar = {
    name: name,
    species: species,
    gender: gender,
    id: id,
    image: image,
    onClose:onClose,
   }

 /*   useEffect(() => {
    setIsFav(myFavorites.filter(fav => fav.id === id));
  }, [myFavorites, id]); */



  const handleFavorite = () => {
    if (isFav) {
      dispatch(removeFav(id));
    } else {
      dispatch(addFav(myChar));
    }
    setIsFav(!isFav);
  };
   
 
  return (
    <div className={style.container}>

      <section className={style.firstSection}>

        <div className={style.imageContainer}>
          <img className={style.image} src={image} alt='' loading="lazy" />
          <button className={style.btn} onClick={() => onClose(id)}>X</button>
        </div>

        <button className={style.fav} onClick={handleFavorite}>
        {isFav||fav?'❤️' : '🤍'}
      </button>

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