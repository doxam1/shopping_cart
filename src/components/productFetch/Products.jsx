import { getFetcherWithNativeFetch } from "./getProductWithNativeFetch";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { FadeLoader } from "react-spinners";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ClientContext } from "../../App";

const Spinner = styled(FadeLoader)`
  margin: 0 auto;
  margin-top: 10%;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 1rem 1.5rem;
`;

const Products = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { searchStr } = useContext(ClientContext);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const Products = await getFetcherWithNativeFetch(
          "https://fakestoreapi.com/products"
        );
        let inventory;
        searchStr
          ? (inventory = Products.filter((item) =>
              item.title.toLowerCase().includes(searchStr.toLowerCase())
            ))
          : (inventory = Products);
        setData(inventory);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [searchStr]);

  // let filterdItems;

  // if (searchStr && data) {
  //   filterdItems = data.filter((item) =>
  //     item.title.toLowerCase().includes(searchStr.toLowerCase())
  //   );
  // }

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

Products.propTypes = {
  search: PropTypes.bool,
};
