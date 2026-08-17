function Cart({ cart, totalQuantity, orderTotal, onRemove, onConfirmOrder }) {
  return (
    <aside className="rounded-xl bg-white p-6 lg:sticky lg:top-8">
      <h2 className="text-2xl font-bold text-brand-red">
        Your Cart ({totalQuantity})
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
            {cart.map((item) => {
              const subtotal = item.price * item.quantity;

              return (
                <li key={item.name} className="border-b border-rose-100 py-4">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-semibold text-rose-900">{item.name}</h3>

                    <div className="mt-2 flex items-center gap-3 text-sm">
                      <span className="font-semibold text-brand-red">
                        {item.quantity}x
                      </span>
                      <span className="text-rose-400">
                        @ $ {item.price.toFixed(2)}
                      </span>
                      <span className="font-semibold text-rose-500">
                        $ {subtotal.toFixed(2)}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onRemove(item.name)}
                      aria-label={`Remove ${item.name} from cart`}
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-rose-400"
                    >
                      <img
                        src="/images/icon-remove-item.svg"
                        alt=""
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center justify-between py-6">
            <span className="text-sm text-rose-900">Order Total</span>

            <strong className="text-2xl text-rose-900">
              $ {orderTotal.toFixed(2)}
            </strong>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-lg bg-rose-50 px-4 py-4">
            <img
              src="/images/icon-carbon-neutral.svg"
              alt=""
              aria-hidden="true"
              className="h-6 w-6"
            />
            <p className="text-sm text-rose-900">
              This is a <strong>carbon neutral</strong> delivery
            </p>
          </div>
          <button
            type="button"
            onClick={onConfirmOrder}
            className="mt-6 w-full rounded-lg bg-brand-red px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-red/90"
          >
            Confirm Order
          </button>
        </div>
      )}
    </aside>
  );
}

export default Cart;
