function ProductCard({
    product,
    quantity,
    onAddToCart,
    onIncrement,
    onDecrement,
}) {
    return (
        <article className="min-w-0">
            <div className="relative mb-9">
                <picture className="block">
                    <source
                        media="(min-width: 1024px)"
                        srcSet={product.image.desktop}
                    />

                    <source
                        media="(min-width: 640px)"
                        srcSet={product.image.tablet}
                    />

                    <img
                        src={product.image.mobile}
                        alt={product.name}
                        className="block w-full rounded-lg object-cover"
                    />
                </picture>

                {quantity === 0 ? (
                    <button
                        type="button"
                        onClick={() => onAddToCart(product)}
                        className="
                            absolute bottom-0 left-1/2
                            flex w-40
                            -translate-x-1/2 translate-y-1/2
                            items-center justify-center
                            whitespace-nowrap rounded-full
                            border border-rose-400
                            bg-white px-5 py-3
                            font-semibold text-rose-900
                        "
                    >
                        Add to Cart
                    </button>
                ) : (
                    <div
                        className="
                            absolute bottom-0 left-1/2
                            flex w-40
                            -translate-x-1/2 translate-y-1/2
                            items-center justify-between
                            rounded-full bg-brand-red
                            px-3 py-3 text-white
                        "
                    >
                        <button
                            type="button"
                            onClick={() => onDecrement(product.name)}
                            aria-label={`Decrease quantity of ${product.name}`}
                            className="flex h-5 w-5 items-center justify-center rounded-full border border-white"
                        >
                            −
                        </button>

                        <span className="font-semibold">
                            {quantity}
                        </span>

                        <button
                            type="button"
                            onClick={() => onIncrement(product.name)}
                            aria-label={`Increase quantity of ${product.name}`}
                            className="flex h-5 w-5 items-center justify-center rounded-full border border-white"
                        >
                            +
                        </button>
                    </div>
                )}
            </div>

            <p className="text-sm text-rose-400">
                {product.category}
            </p>

            <h2 className="my-1 font-semibold text-rose-900">
                {product.name}
            </h2>

            <p className="font-semibold text-brand-red">
                R$ {product.price.toFixed(2)}
            </p>
        </article>
    );
}

export default ProductCard;