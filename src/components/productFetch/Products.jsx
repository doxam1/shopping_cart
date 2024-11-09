import { getFetcherWithNativeFetch } from "./getProductWithNativeFetch";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { FadeLoader } from "react-spinners";

const Spinner = styled(FadeLoader)`
  margin: 0 auto;
  margin-top: 10%;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
`;

const Products = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
  }, []);

  return (
    <>
      <div>
        <p>{loading && <Spinner color={"rgba(46, 46, 46, 0.3)"} />}</p>
        <p>{error && `${error}`}</p>
        <Wrapper>
          {data &&
            data.map((product) => (
              <ProductCard
                key={product.title}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                product={product}
              />
            ))}
        </Wrapper>
      </div>
    </>
  );
};

export default Products;
