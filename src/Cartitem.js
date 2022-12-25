import React from "react";

class CartItem extends React.Component
{
    
    render()
    {
        const {price,title,qty} = this.props.product;
        const {product,IncreaseQuantity,DecreaseQuantity ,DeletItem} = this.props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1828/1828926.png" onClick={() => IncreaseQuantity(product)}/>
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/992/992683.png" onClick={() => DecreaseQuantity(product)}/>
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/484/484662.png" onClick={() => DeletItem(product.id)}/>
                    </div>
                </div>

            </div>
        );
    }
}

const styles = {
    image:{
      height:110,
      width:110,
      bordeRadius:4,
      background:'#ccck'
    }
  }
  

export default CartItem;