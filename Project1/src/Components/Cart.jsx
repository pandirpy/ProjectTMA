import { useState } from 'react'
function Cart() {
    const [items, setItems] = useState(0)
    function addToCart(){
        setItems(items+1)
    }
    function deleteFromCart(){
        if (items>0) {
            setItems(items-1)
        }
    }
  return (
    <div>
        <div>
            <h1>
                Number of items in the cart: {items}
            </h1>
        </div>
        <button onClick={addToCart} >Add to Cart</button>
        <button onClick={deleteFromCart}>Remove from Cart</button>
    </div>
  )
}

export default Cart