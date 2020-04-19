import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product.price);
   const {name, imgURL,description, price} = props.product;
    return (
        <div className="row">
            <div className="col-sm-6">
            <img src={imgURL} alt="" />
            <p>{name}</p>
            </div>
            <div className="col-sm-6">
            <p>{price}</p>
            </div>
        </div>
    )
};

export default Product;