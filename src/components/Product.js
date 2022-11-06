import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "../App.css";
import axios from "axios";
import { add } from "../store/cartSlice";
import Cart from "../pages/Cart";

const Products = () => {
  const  dispatch=useDispatch();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  const handelAdd=(product)=>{
    dispatch(add(product));

  }
  return (
    <div className="homepage">
      <div className="products-container">
        {loading && (
          <div>
            {""}
            <h1>Loading...</h1>
          </div>
        )}
        {data.map((product) => (
          <div key={product.id} className="card">
            <div>
              <img src={product.image} alt="#" />
            </div>
            <div className="card-description">
              <h6>{product.title}</h6>
              <h6>{`Price: ${product.price}`}</h6>
              <h6>{`Category: ${product.category}`}</h6>
            </div>
            <div>
              <button onClick={() => handelAdd(product)} className="btn">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div class="vl"></div>
      <div className="Cartpage">
        <Cart />
      </div>
    </div>
  );
};

export default Products;
