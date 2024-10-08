//CSS imports
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getProduct } from '../../apis/fakeStoreProdApis';

function ProductDetails() {

     const { id } = useParams();
     const [product, setProduct] = useState(null);

     async function downloadProducts(id) {
          const response = await axios.get(getProduct(id));
          setProduct(response.data);
          console.log(response.data);
     }

     useEffect(() => {
          downloadProducts(id)
     }, [])


     return (
          product &&
          <div className="container">
               <div className="row">
                    <div className="product-details-wrapper d-flex justify-content-between flex-row">
                         <div className="product-img d-flex">
                              <img src={product.image} alt="Product Image" id="product-img" />
                         </div>
                         <div className="product-details-box d-flex flex-column">
                              <div id="productDetails">
                                   {/* { < !--TODO fill the product details-->} */}
                                   <div className="product-name" id="product-name">{product.title}</div>
                                   <div className="product-price fw-bold" id="product-price">$ {product.price}</div>
                                   <div className="product-description">
                                        <div className="product-description-title fw-bold">Description</div>
                                        <div className="product-description-data" id="product-description-data">
                                             {product.description}
                                        </div>
                                   </div>
                              </div>

                              <div className="product-details-action btn btn-primary text-decoration-none">Add to Cart</div>
                              <a href="cart.html" id="goToCartBtn"
                                   className="product-details-action btn btn-warning text-decoration-none">
                                   Go to Cart
                              </a>


                         </div>
                    </div>
               </div>
          </div>

     )
}
export default ProductDetails;