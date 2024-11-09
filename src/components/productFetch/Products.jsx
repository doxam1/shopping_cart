import { getFetcherWithNativeFetch } from "./getProductWithNativeFetch";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { ClientContext } from "../../App";
import style from "../../style/Products.module.scss";

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

const ProductDiv = styled.div`
  padding: 1rem;
  border: 1px solid;
`;

const Stock = styled.p`
  color: green;
  font-weight: 600;
  font-size: small;
`;

const Products = () => {
  const { cart, setCart } = useContext(ClientContext);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // save cart on rerenders&page refresh to local storage.
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
  }, [data]);

  return (
    <>
      <div>
        <p>{loading && "loading..."}</p>
        <p>{error && `${error}`}</p>
        <Wrapper>
          {data &&
            data.map((product) => (
              <ProductDiv key={product.id}>
                <img src={product.image} alt={product.title} />
                <h5>{product.title}</h5>
                {/* <p>{product.description}</p> */}
                <Stock> In Stock </Stock>

                <h4>${product.price}</h4>
                <div className={style.quntityAddBtnDiv}>
                  <label htmlFor="quantity">
                    <input type="number" placeholder="Quantity" min="0" />
                  </label>
                  <button onClick={() => setCart([...cart, product])}>
                    Add to Cart{" "}
                  </button>
                </div>
              </ProductDiv>
            ))}
        </Wrapper>
      </div>
    </>
  );
};

export default Products;
