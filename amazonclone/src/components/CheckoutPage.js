import React from 'react'
import CheckoutProduct from "./CheckoutProduct"
import { useStateValue } from '../providers/StateProvider';
import "./CheckoutPage.css"
import SubTotal from './SubTotal';
// import "./SubTotal.css"

function CheckoutPage() {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='checkoutProduct'>

            <div className='checkoutLeft'>

                {/* <img className='checkout_ad'
          src=' https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
          /> */}

                <h1 className='checkoutTitle'> Your Shopping Basket </h1>

                {/* {
            basket.map(item =>( */}
                <CheckoutProduct id="56215"
                    title="This is my Product"
                    image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    price="199"
                    rating="4"
                />

                <CheckoutProduct id="51546"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    price="149"
                    rating="3"
                />
                <CheckoutProduct id="56215"
                    title="This is my Product"
                    image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    price="199"
                    rating="4"
                />

                <CheckoutProduct id="51546"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    price="149"
                    rating="3"
                />

                <CheckoutProduct id="56215"
                    title="This is my Product"
                    image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    price="199"
                    rating="4"
                />

                <CheckoutProduct id="51546"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    price="149"
                    rating="3"
                />
                <CheckoutProduct id="56215"
                    title="This is my Product"
                    image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    price="199"
                    rating="4"
                />

                <CheckoutProduct id="51546"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    price="149"
                    rating="3"
                />

                {/* ))
        } */}


            </div>

            <div className='checkoutRight'>
                <SubTotal />
            </div>

        </div>
    )
}

export default CheckoutPage;
