import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from "../providers/StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProductImage' src={image} />

            <div className='checkoutProductInfo'>
                <p className='checkoutProductTitle'>{title}</p>
                <p className='checkoutProductPrice'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className='checkoutProductRating'>
                    {
                        Array(rating).fill().map((_, i) => (
                            <p>⭐</p>
                        ))
                    }
                </div>

                {!hideButton && (
                    <button onClick={removeFromBasket}>
                        <p>
                        Remove From Basket
                        </p>
                    </button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
