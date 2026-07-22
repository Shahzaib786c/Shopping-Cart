import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="product-page">
      <div className="page-head">
        <h2>Products</h2>
        <button>+ Add product</button>
      </div>
      <div className="grid">
        <h3>No product yet</h3>
        <ProductCard />
        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </div>
    </div>
  );
};

export default ProductList;
