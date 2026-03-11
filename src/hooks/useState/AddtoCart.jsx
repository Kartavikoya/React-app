import { useState } from "react";

// props component with increment behavior
const AllBrand =  [
    {id: "1", brandName: 'Puma'},
    {id: "2", brandName: 'Adidas'},
    {id: "3", brandName: 'Fila'},
    {id: "4", brandName: 'Rebook'}
];
    
function Cart() {
// keep cart items with quantity
const [cart, setCart] = useState([]);

const AddtoCart = (id) => {
    const selectedItem = AllBrand.find(item => item.id === id);
    setCart(prev => {
      // if already in cart, increment qty
      const existing = prev.find(i => i.id === id);
      if (existing) {
        return prev.map(i =>
          i.id === id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      // new item with qty 1
      return [...prev, { ...selectedItem, qty: 1 }];
    });
};

    
  return (
    <>
        <div>
            <p>Add Brand to your Cart</p>
            {
                AllBrand.map(brand => (
                  <div key={brand.id}>
                    <span>{brand.brandName}</span>
                    <button onClick={() => AddtoCart(brand.id)}>Add TO Cart</button>
                  </div>
                ))
            }
        </div>
        <div>
            <p>Your Cart</p>
            {
                cart.length === 0 ? (
                  <p>No item added in cart</p>
                ) : (
                  cart.map(item => (
                    <div key={item.id}>
                      <span>{item.brandName} x{item.qty}</span>
                    </div>
                  ))
                )
            }
        </div>
    </>
  );
}

export default Cart;
