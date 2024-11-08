import { getFetcherWithNativeFetch } from "./getProductWithNativeFetch";
import { useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const fetchProductData = async () => {
        try {
          const Products = await getFetcherWithNativeFetch(
            "https://fakestoreapi.com/products"
          );
          setData(Products);
          setError(null);
        } catch (err) {
          setError(err.message);
          setData(null);
        } finally {
          setLoading(false);
        }
      };

      fetchProductData();
    }, 1500);
  }, []);

  return (
    <>
      <div>
        <p>{loading && "loading..."}</p>
        <p>{error && `${error}`}</p>
        <div>
          {data &&
            data.map((product) => (
              <p key={product.id}>title: {product.title}</p>
            ))}
        </div>
      </div>
    </>
  );
};

export default Products;
