import React, { Component } from 'react'
import { storeProducts,detailProduct } from './data';
const ProductContext= React.createContext();


 class ProductProvider extends Component {

    state={
        products:[...storeProducts],
        detailProduct:detailProduct
    };
    componentDidMount(){
        this.setProducts();
    }
    setProducts=()=>{
        let tempProducts=[];
        storeProducts.forEach(item =>{
            const singleItem ={...item};
            tempProducts=[...tempProducts,singleItem];
        })
        this.setState(()=>{
            return{products:tempProducts}
        })
    }
    handelDetail=()=>{
      console.log("hello Detail")
    }
    addToCart=()=>{
     console.log("hello from addToCart")
    }
    tester=()=>{
        console.log('State Products :', this.state.products[0].inCart);
        console.log('Data Products :', storeProducts[0].inCart);
    
    const tempProducts =[...this.state.products];
    tempProducts[0].inCart = true
    this.setState(()=>{
      return{products:tempProducts}
    },()=>{
        console.log('State Products :', this.state.products[0].inCart);
        console.log('Data Products :', storeProducts[0].inCart);  
    })
    }
    render() {
        return (
            <ProductContext.Provider value={{
             ...this.state,
             handelDetail: this.handelDetail,
             addToCart:this.addToCart
            }}>
               
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer}; 