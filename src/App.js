import NavBar from './Components/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainer';
import './Components/CartWidget.css'
import './App.css';
import ItemDetailContainer from './Components/ItemDetailContainer';
import CartWidget from './Components/CartWidget';
import Error from './Components/Error';



function App() {
  return (
    <div className="App">


      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Home"/>} />
        <Route path='category/:id' element={<ItemListContainer/>} />
        <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<CartWidget />} />
        <Route path= '*' element={<Error/>} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
