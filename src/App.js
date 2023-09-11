import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import './Components/CartWidget.css'
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='Que Onda Wey'/>
    </div>
  );
}

export default App;
