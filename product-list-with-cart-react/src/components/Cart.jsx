function Cart({ cart, totalQuantity, orderTotal, onRemove }) {
  return (
    <aside className="rounded-xl bg-white p-6">
      <h2 className="text-2xl font-bold text-brand-red">
        Your Cart ({ totalQuantity })
      </h2>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center py-8">
          <img
            src="/images/illustration-empty-cart.svg"
            alt=""
            aria-hidden="true"
            className="w-32"
          />
          <p className="mt-4 text-center text-sm text-gray-500">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.name} className="border-b border-rose-100 py-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-rose-900">{item.name}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemove(item.name)}
                    aria-label={`Remove ${item.name} from cart`}
                    className="flex h-5 w-5 items-center justify-center rounded-full border border-rose-400 text-rose-400"
                  >
                    x
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between py-6">
            <span className="text-sm text-rose-900">
                Order Total                
            </span>

            <strong className="text-2xl text-rose-900">
                R$ {orderTotal.toFixed(2)}
            </strong>
          </div>

        </div>
      )}
    </aside>
  );
}

export default Cart;
