import style from "../../style/ProductCard.module.scss";
import styled from "styled-components";
import PropTypes from "prop-types";

import { useContext, useEffect } from "react";
import { ClientContext } from "../../App";

const ProductDiv = styled.div`
  padding: 1rem;
  border: 1px solid;
`;

const Stock = styled.p`
  color: green;
  font-weight: 600;
  font-size: small;
`;

const ProductCard = (props) => {
  const { cart, setCart } = useContext(ClientContext);
  // save cart on rerenders&page refresh to local storage.
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <ProductDiv>
      <img src={props.image} alt={props.title} />
      <h5>{props.title}</h5>
      {/* <p>{product.description}</p> */}
      <Stock> In Stock </Stock>

      <h4>${props.price}</h4>
      <div className={style.quntityAddBtnDiv}>
        <label htmlFor="quantity">
          <input type="number" placeholder="Quantity" min="0" />
        </label>
        <button onClick={() => setCart([...cart, props.product])}>
          Add to Cart{" "}
        </button>
      </div>
    </ProductDiv>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  setCart: PropTypes.func,
  cart: PropTypes.array,
  product: PropTypes.object,
};

export default ProductCard;

// {/* <ProductDiv key={product.id}>
//                 <img src={product.image} alt={product.title} />
//                 <h5>{product.title}</h5>
//                 {/* <p>{product.description}</p> */}
//                 <Stock> In Stock </Stock>

//                 <h4>${product.price}</h4>
//                 <div className={style.quntityAddBtnDiv}>
//                   <label htmlFor="quantity">
//                     <input type="number" placeholder="Quantity" min="0" />
//                   </label>
//                   <button onClick={() => setCart([...cart, product])}>
//                     Add to Cart{" "}
//                   </button>
//                 </div>
//               </ProductDiv> */}
