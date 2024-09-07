import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";
import axios from "axios";

function Products({ product }) {
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data.products);
        setproducts(res.data.products);
        setloading(false);
      })
      .catch((error) => {
        console.error(error);
        setloading(false);
      });
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className="product-list">
            {products.map((data) => (
              <ProductCard key={data.id} product={data} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default Products;
