import { useContext } from "react";
import { ClientContext } from "/src/App";
import styled from "styled-components";

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  padding: 1rem 1rem 2rem;
  margin: 0 auto;

  & > div {
    border: 1px solid;
    min-height: 3rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    justify-content: space-around;
    align-items: center;

    & img {
      max-width: 30%;
    }
  }
`;

const Input = styled.input`
  max-width: 120px;
`;

const AllCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CheckoutWrapper = styled.div`
  max-width: 60%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const AddSubstract = styled.button`
  /* max-width: fit-content; */
  border-radius: ${(props) =>
    props.$plus ? "10px 0 0 10px" : "0 10px 10px 0"};
  min-width: 1.5rem;
  max-width: 1.5rem;
  font-weight: 800;
`;

const ShoppingCart = () => {
  const { cart, setCart } = useContext(ClientContext);

  const total = cart.reduce(
    (acc, current) => acc + current.price * current.quantity,
    0
  );

  const newQuantity = (item, newQuantity, event) => {
    let updatedCart;
    if (event && event.type === "click") {
      updatedCart = cart.map((product) =>
        product.id === item.id
          ? {
              ...product,
              quantity:
                product.quantity == 1 && newQuantity == -1
                  ? product.quantity
                  : product.quantity + newQuantity,
            }
          : product
      );
    } else {
      updatedCart = cart.map((product) =>
        product.id === item.id
          ? { ...product, quantity: parseInt(newQuantity) }
          : product
      );
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => item.id != product.id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <>
      <AllCartWrapper>
        <CheckoutWrapper>
          <p>total amount ${total.toFixed(2)}</p>
          <button> Pay Now </button>
        </CheckoutWrapper>
        <CartWrapper>
          {cart.map((item) => (
            <div key={item.title}>
              <img src={item.image} alt="" />
              <span>
                <h6>
                  {item.title} ${item.price}
                </h6>
                <div>
                  <AddSubstract $plus onClick={(e) => newQuantity(item, 1, e)}>
                    {" "}
                    +{" "}
                  </AddSubstract>
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => newQuantity(item, e.target.value)}
                    min={1}
                  />
                  <AddSubstract
                    $minus
                    onClick={(e) => newQuantity(item, -1, e)}>
                    {" "}
                    -{" "}
                  </AddSubstract>{" "}
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
              </span>
            </div>
          ))}
        </CartWrapper>
      </AllCartWrapper>
    </>
  );
};

export default ShoppingCart;
