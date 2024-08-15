import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Login from "./Login";
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Main from "./Main";
import Home from "./Home";
import About from "./About";
import Products from './Products';
import Contact from "./Contact";
import ProductId from "./ProductId";
import {Provider} from 'react-redux';
import store from "./redux/store";
import CheckOut from "./Checkout";
const App = () => {
return(
<>
<Provider store={store}>
<BrowserRouter>
<Routes>
<Route path="/login" element ={<Login/>}/>
<Route path="/main" element={<Main/>}/>
<Route path ='/' element={<Home/>}/>
<Route path ='/about' element={<About/>}/>
<Route path ='/products' element={<Products/>}/>
<Route path ='/contact' element={<Contact/>}/>
<Route path='/products/:id' element={<ProductId/>}/>
<Route path="/checkout"element={<CheckOut/>}/>
</Routes>
</BrowserRouter>
</Provider>
</>
);
}

export default App;