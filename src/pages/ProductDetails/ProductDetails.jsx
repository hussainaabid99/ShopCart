//CSS imports
import './ProductDetails.css';

function ProductDetails() {
     return (
          <div className="container">
               <div className="row">
                    <div className="product-details-wrapper d-flex justify-content-between flex-row">
                         <div className="product-img d-flex">
                              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="Product Image" id="product-img" />
                         </div>
                         <div className="product-details-box d-flex flex-column">
                              <div id="productDetails">
                                   {/* { < !--TODO fill the product details-->} */}
                                   <div className="product-name" id="product-name">Some product</div>
                                   <div className="product-price fw-bold" id="product-price">324</div>
                                   <div className="product-description">
                                        <div className="product-description-title fw-bold">Description</div>
                                        <div className="product-description-data" id="product-description-data">
                                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam animi illo, suscipit pariatur vero omnis exercitationem.
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