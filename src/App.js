import './App.css';
import NavBar from './components/NavBar/navbar';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/marcas/:marcaId' element={<ItemListContainer/>}/>
        <Route path='/zapatillas/:generoId' element={<ItemListContainer/>}/>
        <Route path='/detail/:detailId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h2>OPS! No encontramos la ruta</h2>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
