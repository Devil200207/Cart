import React from "react";
import CartItem from "./Cartitem";

class Cart extends React.Component
{
    constructor ()
    {
        super(); 
        this.state = {
           products:[
            {
                price:19999,
                title:'Mobile Phone',
                qty:1,
                img: '',
                id:1
            },
            {
                price:1999,
                title:'Watch',
                qty:1,
                img: '',
                id:2
            },
            {
                price:49999,
                title:'Laptop',
                qty:1,
                img: '',
                id:3
            }
           ]
        }
    }
    handleIncreaseQuantity = (product) =>
    {
       const {products} = this.state;
       const index = products.indexOf(product);
       products[index].qty +=1;

       this.setState({
        products:products
       })
    }
    handleDecreaseQuantity = (product) =>
    {
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty === 0)
        {
            return;
        }
        products[index].qty -=1;

        this.setState({
            products:products
        })
    }
    handleDeleteItem = (id) =>
    {
       const {products} =  this.state;
       const items = products.filter((item) => item.id !== id);

       this.setState({
        products:items
       })
    }
    render()
    {
        const {products} = this.state;
       return(
        <div className="cart">
                   
            {
                products.map((product) =>
                {
                   return <CartItem product={product} key={product.id} IncreaseQuantity ={this.handleIncreaseQuantity} DecreaseQuantity={this.handleDecreaseQuantity} DeletItem={this.handleDeleteItem} />
                })
            }
        </div>
       ); 
    }
}

export default Cart;