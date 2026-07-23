import ProductCard from "./ProductCard";

const ProductList = ({ products, onAddToCart, onOpenAdd }) => {
  return (
    <div className="page">
      <div className="page-head">
        <h2>Products</h2>
        <button onClick={onOpenAdd}>+ Add Product</button>
      </div>
      <div className="grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
