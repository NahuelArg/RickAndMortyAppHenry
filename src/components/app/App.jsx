import { useEffect, useState } from 'react';
import style from "./App.module.css";
import Cards from '../cards/Cards.jsx';
import Nav from "../NavBar/NavBar.jsx";
import axios from 'axios';
import {Route, Routes,useLocation, useNavigate} from 'react-router-dom';
import About from '../About/About.jsx';
import Detail from "../Detail/Detail.jsx"
import Form from "../Form/Form.jsx"
import Favorites from "../Favorites/Favorites.jsx";


function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  const EMAIL = 'nahuel@gmail.com';
  const PASSWORD = '12345';

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
        setAccess(true);
        navigate('/home');
    }
}

    function logout() {
     setAccess(false);
     navigate('/');
 }
     useEffect(() => {
      !access && navigate('/');
      }, [access]);

 const onSearch = (id) => {
    if(!isNaN(id)){
    axios(`https://rickandmortyapi.com/api/character//${id}`).then(
      (response) => {
        if (response.data.name) {
          if (!characters.find(char => char.id === response.data.id)) {
            setCharacters((oldChars) => [...oldChars, response.data]);
          } else {
            window.alert(`El personaje ${id} ha sido seleccionado`);
          }
        } else {
          window.alert(`¡No hay personajes con este ID!: ${id}`);
        }
      }
    );
  }
};

  const onClose = (id) => {
    const filterState = characters.filter(characters => characters.id !== parseInt(id));
    setCharacters(filterState);
  };

  const onAddRandomCharacter = () => {
    const randomID = Math.floor(Math.random() * 827) + 1;
    axios(`https://rickandmortyapi.com/api/character//${randomID}`).then(
      (response) => {
        if (response.data.name) {
          setCharacters((oldChars) => [...oldChars, response.data]);
        } else {
          window.alert(`No se pudo agregar un personaje aleatorio en este momento.`);
        }
      }
    );
  };

  return (
<div className={style.divApp}>
{pathname !== "/" && <Nav onAddRandomCharacter={onAddRandomCharacter} onSearch={onSearch} onLogout={logout} />} {/* Pasar la función de logout como prop */}
<Routes>
    <Route path='/' element={<Form login={login} />} />
    <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
    <Route path='/about' element={<About />} />
    <Route path='/detail/:id' element={<Detail/>} />
    <Route path='/favorites' element={<Favorites />}/>
    <Route path='*' element={<h1>Not Found</h1>} />
</Routes>
</div>
  );
}

export default App;