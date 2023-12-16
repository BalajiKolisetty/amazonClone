import React from 'react'
import "./SubTotal.css"
import { useStateValue } from '../providers/StateProvider';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { getBasketTotal } from '../providers/Reducer';
import CurrencyFormat from "react-currency-format"

function SubTotal() {

    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='subTotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <p> Subtotal ({basket.length} item)<strong>{value}</strong></p>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed To Checkout</button>

        </div>
    )
}

export default SubTotal;
