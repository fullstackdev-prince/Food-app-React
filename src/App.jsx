import React from 'react';
import Home from './pages/Home';
import "./App.css";
import { BrowserRouter , Route, Navigate , Routes } from 'react-router-dom';
import Cart from './pages/Cart';
const App = () => {
  return (
    <div className='container'>
        <BrowserRouter>
          <Routes>
            {/* <Route exact path="/" component={Home}/> */}
            {/* <Route exact path="/cart" component={Cart}/> */}
            <Route path='/' element={<Home/>} />
            <Route path='/cart' element={<Cart/>} />
            {/* <Route render={() => <Navigate to ='/' />} />  */}
            <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
          </Routes>
        </BrowserRouter>

    </div>
  );
};

export default App