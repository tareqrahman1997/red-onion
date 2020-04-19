import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const Shop = () => {
    const first6 = fakeData.slice(0,6);
    const[products, setProducts] = useState(first6);
    return (
        <div>
            <p>this is shop</p>
            <h3>{products.length}</h3>
            {
                products.map(pd => <Product product ={pd}></Product>)
            }
        </div>
    );
};

export default Shop;