import ProductCard from "./ProductCard";

function ProductList({ products, cart, onAddToCart, onIncrement, onDecrement }) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const cartItem = cart.find((item) => item.name === product.name);

        const quantity = cartItem?.quantity ?? 0;

        return (
          <ProductCard
            key={product.name}
            product={product}
            quantity={quantity}
            onAddToCart={onAddToCart}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
