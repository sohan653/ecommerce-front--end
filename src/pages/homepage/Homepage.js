import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MenuCard from '../../components/menucard';
import ProductCard from '../../components/ProductCard';
import { useAuth } from '../../context/auth';


const Homepage = () => {
   const [products,setProducts]=useState([]);
   const [loader,setLoader]=useState(false);
   useEffect(()=>{
    axios.get('/list-products').then(res=>{
       setProducts(res.data);
    })
    .catch(err => console.error(err));
   },[])
    
    const [auth,setAuth]=useAuth();
    const arr = [...products];
    const sortedBySold = arr?.sort((a, b) => (a.sold < b.sold ? 1 : -1));
   
    return (
        <div>
        
            <MenuCard title={'homepage'}></MenuCard>
           
            <div className="row">
        <div className="col-md-6">
          <h2 className="p-3 mt-2 mb-2 h4 bg-light text-center">
            New Arrivals
          </h2>
          <div className="row">
            {products?.map((p) => (
              <div className="col-md-6" key={p._id}>
                <ProductCard p={p} />
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-6">
          <h2 className="p-3 mt-2 mb-2 h4 bg-light text-center">
            Best Sellers
          </h2>
          <div className="row">
            {sortedBySold?.map((p) => (
              <div className="col-md-6" key={p._id}>
                <ProductCard p={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
        </div>
    );
};

export default Homepage;