import React from "react";
import "../components/Navbar.css"
import { FaCartPlus} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; 
const  Navbar = () => {
  const items = useSelector((state)=>state.cart);
  return (
    <div className="navbar">
      <h1>Shopping App</h1>
      <Link to="/" className="Homenav">Home</Link>
      <Link to="/cart" className="cartCount" >
        <FaCartPlus className="icons " /> {items.length}
      </Link>
    </div>
  );
};

export default Navbar;
