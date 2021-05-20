import React,{useState} from 'react';
import './Home.css';
import {useEffect} from 'react';
import {useSelector ,useDispatch} from 'react-redux';
import ProductItems from "../Components/ProductItems";
import {getProducts as listProducts} from '../redux/actions/productActions';
import SwiftSlider from "react-swift-slider";
import Banner1 from "../Images/Grocerybanner-1.png";
import Banner2 from "../Images/Grocerybanner-2.png";
import Banner3 from "../Images/Grocerybanner-3.png";
import Banner4 from "../Images/Grocerybanner-4.png";
import Banner5 from "../Images/Grocerybanner-5.png";
import Banner6 from "../Images/Grocerybanner-6.png";

const  Home = () => {

  const data = [
    {
      id: "1",
      src: Banner1,
    },
    {
      id: "2",
      src: Banner2,
    },
    {
      id: "3",
      src: Banner3,
    },
    {
      id: "4",
      src: Banner4,
    },
    {
      id: "5",
      src: Banner5,
    },
    {
      id: "6",
      src: Banner6,
    },
  ];

  const dispatch =useDispatch();
  const getProducts =useSelector((state) => state.getProducts);
  const { products, loading, error} = getProducts;

  useEffect(()=>{
    dispatch(listProducts());
   },[dispatch]);
   
 
  return (
    
    <div className ="Homescreen">
       <div className="banner">
        <SwiftSlider data={data} height={450} showDots={true} />
      </div>
      <h2 className ="homescreen_title">Latest Products</h2>
      <div className="homescreen_products">
      {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <ProductItems
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
        
      </div>
    </div>
  )
}

export default Home