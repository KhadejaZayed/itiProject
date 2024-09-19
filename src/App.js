import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from './compnents/Navbar';
import { Routes, Route} from 'react-router-dom';
import Allproducts from './pages/Allproducts';
import Home from './pages/Home';
import Product from './pages/Product';
import Addproduct from './pages/Addproduct';
import Catigorize from './pages/Catigorize';
import Edit from './pages/Edit';
import Cart from './compnents/Cart';
function App() {
  return (
    <div className="App">
      <Navbar />
        <div className='w-75 m-auto'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/productscrud' element={<Allproducts/>}/>
            <Route path='/products/:id' element={<Product/>}/>
            <Route path='/products/add' element={<Addproduct/>}/>            
            <Route path='/catigorize' element={<Catigorize/>}/>
            <Route path='/edit/:id' element={<Edit/>}/>            
            <Route path='cart' element={<Cart/>}/>            
          </Routes>
        </div>
    </div>
  );
}

export default App;
