import { getFetcherWithNativeFetch } from "./getProductWithNativeFetch";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;

  & > div {
    min-height: 200px;
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & * {
      margin-top: 0;
      margin-bottom: 0;
    }

    & > img {
      max-width: 60%;
      margin: 0 auto;
    }
  }
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
        <p>{loading && "loading..."}</p>
        <p>{error && `${error}`}</p>
        <Wrapper>
          {data &&
            data.map((product) => (
              <ProductCard
                key={product.id}
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
