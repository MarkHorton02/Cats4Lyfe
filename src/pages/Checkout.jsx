import PayPal  from '../assets/Paypal.png'
import VisaDebit from '../assets/Visa.png'
import MasterCard from '../assets/mastercard.png'
import  Amex  from '../assets/amex.png'

const Checkout = ({catsInBasket}) => {

    return (
    <div>
        <h1>Checkout</h1>
        {catsInBasket.map((cat, index) => {
            return (
                <div key={index}> 
                <h2>{cat.name}</h2>
                <img src={cat.url} />
                <h2>£{cat.price}</h2>
                </div>
            )
        })}
        <h2>Total Price: £{catsInBasket.reduce((total, cat) => total+cat.price, 0)}</h2>
        <div className='icons'>
            <h3>Select Payment Option: </h3>
            <img id='icons' src={PayPal} />
            <img id='icons' src={MasterCard} />
            <img id='icons' src={VisaDebit} />
            <img id='icons' src={Amex} />
        </div>
    </div>
)}

export default Checkout