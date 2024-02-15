import { useState } from "react";
import styles from "./searchBar.module.css"
export default function SearchBar({onSearch}) {
    const [id, setId] = useState('');
    const handleChange=(event)=>{
        setId(event.target.value);
    };
   return (
      <div className={styles.SearchBar}>
         <input className={styles.input} type='search' value={id} onChange={handleChange}/>
         <button className={styles.btn} onClick={()=>onSearch(id)}>Agregar</button> 
      </div>
   );
}