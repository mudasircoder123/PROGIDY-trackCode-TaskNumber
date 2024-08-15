import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = () => {
const cartItems = useSelector(state => state.cart.cart);
return(
<>
<div className="header">
<ul>
<li className="nav-link"><Link to='/'>home</Link></li>
<li  className="nav-link"><Link to='/about'>About</Link></li>
<li  className="nav-link"><Link to='/products'>Products</Link></li>
<li  className="nav-link"><Link to='/contact'>contact us</Link> </li>
<li><Link to='/checkout'>{cartItems.length}</Link></li>
</ul>
<input type="text" placeholder="search"/> 
 </div>
</>
);
}
export default Navbar