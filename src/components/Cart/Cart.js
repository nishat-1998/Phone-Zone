import React, { Component } from 'react'
import Title from '../Title';
import CartColum from "../Cart/CartColum";
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../Context';
import CartList from './CartList';
import CartTotals from './CartTotal';

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value =>{
                        const {cart}= value;
                        if(cart.length>0){
                            return (
                         <React.Fragment>

                          <Title name="Your" title="Cart"/>
                            <CartColum/>
                            <CartList value={value}/>
                            <CartTotals value={value}/>
                           </React.Fragment>
                            );
                        }
                        else{
                            return (
                            <EmptyCart/>
                            );
                        }
                    }}
                    </ProductConsumer>
                 
            </section>
        );
    }
}

        
