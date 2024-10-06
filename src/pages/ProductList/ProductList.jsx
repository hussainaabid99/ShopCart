//CSS import
import './ProductList.css';

//Image import
import ProductBox from '../../components/ProductBox/ProductBox';
import FilterProducts from '../../components/FilterProduct/FilterProducts';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {

     const [productList, setProductList] = useState(null);

     async function downloadProducts() {
          const response = await axios.get(`https://fakestoreapi.com/products`);
          setProductList(response.data);
     }

     useEffect(() => {
          downloadProducts();
     }, [])

     return (
          <div className="container">
               <div className="row">
                    <h2 className="product-list-title text-center">All Products</h2>
                    <div className="product-list-wrapper d-flex flex-row">

                         <FilterProducts />

                         {/**List of products */}

                         <div className="product-list-box" id="productList">

                              {productList && productList.map(
                                   (product) => <ProductBox
                                        key={product.id}
                                        name={product.title}
                                        price={product.price}
                                        productImage={product.image}

                                   />)}
                         </div>
                    </div>
               </div>
          </div>
     )

}

export default ProductList;