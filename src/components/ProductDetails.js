import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../Context';
import {ButtonContainer} from "./Button";


export default class ProductDetails extends Component {
    render() {
        return (
          
                <ProductConsumer>
                 {value =>{
                     const {id,company,img,info, price, title,inCart} =value.detailProduct;
                   return(
                       <div className="container py-5">
                          {/*title*/}
                   <div className="row">
                       <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                           <h1>{title}</h1>

                       </div>
                   </div>
           {/*product info*/}
           <div className="row">
               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">

        <img src={img} className="img-fluid" alt="product"/>
               </div>
               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">

                   <h2> model:{title}</h2>
                   <h4 className="text-title text-uppercase text-muted mt-3 mb-2"> 
                     made by: <span>
                       {company}
                       </span>
                       </h4>
                       <h4 className="text-blue">
                      <strong>
                          Price:<span>$</span>
                          {price}
                      </strong>
                       </h4>
                       <p className="text-capitalize font-weight-bold mt-3 mb-0">
                           More Details:
                           </p>
                           <p className="text-muted lead">
                           {info}
                       </p>
                       <div>
                    <Link to="/">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer 
                    cart
                    disabled={inCart? true:false}
                    onClick={()=> {
                        value.addToCart(id);
                        value.openModal(id);
                    }}
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
               </div>
               </div>
               </div>
                   );
                 }}
                </ProductConsumer>
            
        )
    }
}
