function ProductCard({ product }) {
  return (
    <>
      <div className="card">
        <div className="product-card">
          <img
            className="product-image"
            src={product.images}
            alt={product.title}
          />
          <div className="product-info">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-category">{product.category}</p>
            <p className="product-description">{product.description}</p>
            <div className="product-price-rating">
              <span className="product-price">${product.price}</span>
              <div className="product-rating">
                <span className="rating-rate">⭐ {product.rating}</span>
                <span className="rating-count">
                  ({product.reviews[0].rating} reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
