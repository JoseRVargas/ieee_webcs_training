import { useState } from "react";
import products from "./data/data.json";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import OrderModal from "./components/OrderModal";

function App() {
  const [cart, setCart] = useState([]);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const orderTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  function addToCart(product) {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.name === product.name,
      );

      if (existingItem) {
        return currentCart.map((item) => {
          if (item.name === product.name) {
            return { ...item, quantity: item.quantity + 1 };
          }

          return item;
        });
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  }

  function incrementItem(productName) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.name === productName
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  }

  function decrementItem(productName) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeItem(productName) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.name !== productName),
    );
  }

  function confirmOrder() {
    if (cart.length === 0) {
      return;
    }

    setIsOrderConfirmed(true);
  }

  function startNewOrder() {
    setCart([]);
    setIsOrderConfirmed(false);
  }

  console.log(cart);
  return (
    <>
    <main className="min-h-screen bg-rose-50 px-6 py-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start">
        <section>
          <h1 className="mb-8 text-4xl font-bold text-rose-900">Desserts</h1>
          <ProductList
            products={products}
            cart={cart}
            onAddToCart={addToCart}
            onIncrement={incrementItem}
            onDecrement={decrementItem}
          />
        </section>
        <Cart
          cart={cart}
          totalQuantity={totalQuantity}
          orderTotal={orderTotal}
          onRemove={removeItem}
          onConfirmOrder={confirmOrder}
        />
      </div>
    </main>
    
    {isOrderConfirmed && (
        <OrderModal
          cart={cart}
          orderTotal={orderTotal}
          onStartNewOrder={startNewOrder}
        />
    )}
    </>
  );
}

export default App;
