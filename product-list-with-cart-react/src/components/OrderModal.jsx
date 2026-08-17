function OrderModal({ cart, orderTotal, onStartNewOrder }) {
  return (
    <div className="fixed-inset-0 z-50 flex items-end bg-black/50 sm:items-center sm:justify-center sm:p-6">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-confirmation-title"
        className="max-h-[90vh] w-full overflow-y-auto rounder-t-3xl bg-white p-6 sm:max-w-lg sm:rounded-2xl sm:p-10"
      >
        <img
          src="/images/icon-order-confirmed.svg"
          alt=""
          aria-hidden="true"
          className="h-12 w-12"
        />

        <h2
          id="order-confirmation-title"
          className="mt-6 text-4xl font-bold leading-tight text-rose-900"
        >
          Order Confirmed!
        </h2>

        <p className="mt-2 text-rose-500">We hope you enjoy your food!</p>

        <div className="mt-8 rounder-lg bg-rose-50 p-6">
          <ul>
            {cart.map((item) => {
              const subtotal = item.price * item.quantity;

              return (
                <li
                  key={item.name}
                  className="flex items-center gap-4 border-b border-rose-100 py-4 first:pt-0"
                >
                  <img
                    src={item.image.thumbnail}
                    alt=""
                    className="h-12 w-12 rounded md object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-brand red">
                      {item.quantity}x
                    </h3>

                    <span className="text-rose-400">
                      @ $ {item.price.toFixed(2)}
                    </span>
                  </div>

                  <strong className="shrink-0 text-rose-900">
                    $ {subtotal.toFixed(2)}
                  </strong>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center justify-between pt-6">
            <span className="text-sm text-rose-900">
                Order Total
            </span>
            
            <strong className="text-2xl text-rose-900">
                $ {orderTotal.toFixed(2)}
            </strong>
          </div>
        </div>

        <button
          type="button"
          onClick={onStartNewOrder}
          className="mt-8 w-full rounded full
                      bg-brand-red px-6 py-4
                        font-semibold text-white
                      hover:bg-rose-900"
        >
          Start New Order
        </button>
      </section>
    </div>
  );
}

export default OrderModal;