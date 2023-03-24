import './App.css';
import NavBar from './components/NavBar/navbar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a mi tienda"} />
    </div>
  );
}

export default App;
