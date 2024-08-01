const Checkout = ({catsInBasket}) => {

    return (
    <div>
        <h1>Checkout page</h1>
        {catsInBasket.map((cat, index) => {
            return (
                <div key={index}> 
                <h2>{cat.name}</h2>
                <h2>£{cat.price}</h2>
                </div>
            )
        })}
        <h2>Total Price: £{catsInBasket.reduce((total, cat) => total+cat.price, 0)}</h2>
    </div>
)}

export default Checkout