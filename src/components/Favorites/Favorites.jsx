import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card";
import styles from './Favorites.module.css'
const { fav, cards } = styles



export default function Favorites(){
 const myFavorites = useSelector((state)=>state.myFavorites);

 const dispatch= useDispatch();

 const [aux, setAux]= useState(false);

const handleOrder= (e)=>{
    dispatch(orderCards(e.target.value));
    if (aux){
    setAux (false)}
    else{setAux(true)};
}

const handleFilter= (e)=>{
    dispatch(filterCards(e.target.value));
}

    return(
        <div className={fav}>
            <h1>Your Favorites Characters</h1>
            <nav className={styles.containerselec}>
            <select className={styles.selector} onChange={handleOrder}>
                <option className={styles.opcion} value="A">Ascendente</option>
                <option className={styles.opcion} value="D">Descendente</option>
            </select>
            <select className={styles.selector} onChange={handleFilter}>
                <option className={styles.opcion} value="Male">Male</option>
                <option className={styles.opcion} value="Female">Female</option>
                <option className={styles.opcion} value="Genderless">Genderless</option>
                <option className={styles.opcion} value="unknown">Unknown</option>
                <option className={styles.opcion} value="all">All</option>
            </select>
            </nav>
            <div className={cards}>
                {
                myFavorites?.map((fav)=>(
                    <Card
                        id={fav.id}
                        key={fav.id}
                        name={fav.name}
                        species={fav.species}
                        gender={fav.gender} 
                        image={fav.image} 
                    />
                ))
                }
            </div>
        </div>
    );
}