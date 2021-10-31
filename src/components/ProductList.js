import React, { Component } from 'react'
import { ProductConsumer } from '../Context';
import { storeProducts } from '../data';
import Title from './Title';
import Product from './Product';


export default class ProductList extends Component {
    state={
    products:storeProducts
}
    render() {
        console.log(this.state.products)
        return (
          <React.Fragment>
            <div className="py">
                <div className="container">
                       <Title name="Our" title="products"/>
                    <div className="row">
                    <ProductConsumer>
                        {value =>{
                        //console.log(value)
                        return value.products.map(product =>{
                            return <Product key={product.id} product={product}/>
                        })
                        }}
                    </ProductConsumer>
                    </div>
                </div>
            </div>
          </React.Fragment>
        );
    }
}
