import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import './Components/CartWidget.css'
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import BoxingGloves from './Components/BoxingGloves';
import MmaGloves from './Components/MmaGloves'
import CartWidget from './Components/CartWidget';
import Error from './Components/Error';
import ShinGuards from './Components/ShinGuards';
import Api from './Components/FetchData';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Home"/>} />
        <Route path='/boxinggloves' element={<BoxingGloves/>} />
        <Route path='/mmagloves' element={<MmaGloves/>} />
        <Route path='/shinguards' element={<ShinGuards />} />
        <Route path='/cart' element={<CartWidget />} />
        <Route path= '*' element={<Error/>} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
