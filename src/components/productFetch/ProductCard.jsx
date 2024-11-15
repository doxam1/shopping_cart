import style from "../../style/ProductCard.module.scss";
import styled from "styled-components";
import PropTypes from "prop-types";

import { useContext, useEffect, useState } from "react";
import { ClientContext } from "../../App";

const ProductDiv = styled.div`
  padding: 1rem;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ImageDiv = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    max-width: 80%;
    max-height: 100%;
  }
`;

const Stock = styled.p`
  color: green;
  font-weight: 600;
  font-size: small;
`;

const ProductCard = (props) => {
  const { cart, setCart } = useContext(ClientContext);
  const [quantity, setQuantity] = useState(0);

  // save cart on rerenders&page refresh to local storage.
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (newQuantity) => {
    if (newQuantity === 0) return;

    const existingProductIndex = cart.findIndex(
      (product) => product.id === props.product.id
    );

    let updatedCart;
    if (existingProductIndex !== -1) {
      // If the product is already in the cart, update its quantity
      updatedCart = cart.map((product, index) =>
        index === existingProductIndex
          ? { ...product, quantity: product.quantity + parseInt(newQuantity) }
          : product
      );
    } else {
      // If the product is not in the cart, add it with the specified quantity
      updatedCart = [
        ...cart,
        { ...props.product, quantity: parseInt(newQuantity) },
      ];
    }

    setCart(updatedCart);
  };
  // const addToCart = (newQuantity) => {
  //   if (newQuantity === 0) return;

  //   const updatedProduct = cart.map((product) =>
  //     product.id === props.product.id
  //       ? { ...props.product, quantity: props.product.quantity + newQuantity }
  //       : { ...props.product, newQuantity }
  //   );

  // const updatedProduct = { ...props.product, quantity };
  //   setCart([...cart, updatedProduct]);
  // };

  // const updatedCart = cart.map((product) =>
  //   product.id === item.id
  //     ? { ...product, quantity: parseInt(newQuantity) }
  //     : product
  // );
  // setCart(updatedCart);
  // localStorage.setItem("cart", JSON.stringify(updatedCart));

  return (
    <ProductDiv data-testid="product-item">
      <ImageDiv>
        <img src={props.image} alt={props.title} />
      </ImageDiv>
      <h5>{props.title}</h5>
      <Stock> In Stock </Stock>

      <h4>${props.price}</h4>
      <div className={style.quntityAddBtnDiv}>
        <label htmlFor="quantity">
          <input
            type="number"
            placeholder="Quantity"
            min="0"
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </label>
        <button onClick={() => addToCart(quantity)}>Add to Cart </button>
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
