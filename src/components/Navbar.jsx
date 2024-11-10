import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { ClientContext } from "../App";

const Wrapper = styled.div`
  /* padding: 1rem; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  font-size: 21px;

  a {
    padding: 0.4em 0.6em;
    color: #424242;
    text-decoration: none;

    &:not(.icon):not(.iconCart) {
      margin: 0 auto;
      font-size: large;
    }
  }

  & a:hover {
    opacity: 75%;
    &:not(.icon):not(.iconCart) {
      text-decoration-line: underline;
      text-underline-offset: 1rem;
      color: #053c4e;
    }
  }

  .icon {
    font-size: 2.5rem;
  }
  .iconCart {
    margin-left: auto;
    position: relative;

    & > svg {
      font-size: 2.5rem;
    }
  }
`;
const CartItemsNum = styled.span`
  position: absolute;
  right: 40%;
  bottom: 70%;
  font-size: medium;
  color: #116392;
  text-decoration: none;
`;
const Header = styled(Wrapper)`
  background-color: #053c4e;
  font-size: medium;
  text-align: center;

  p {
    color: #fff;
    margin: 0.2rem auto;
  }
`;
const navLinkActiveStyle = ({ isActive }) => {
  return {
    color: isActive ? "#077599" : "",
  };
};
const Navbar = () => {
  const { cart } = useContext(ClientContext);

  return (
    <>
      <Header>
        <p>
          Need help? please call us <br />
          <GiRotaryPhone style={{ position: "relative", top: "3px" }} />{" "}
          972-3-1123312
        </p>
      </Header>
      <Wrapper>
        <NavLink to="/" className={"icon"}>
          <FaHome />
        </NavLink>
        <NavLink to="shop" style={navLinkActiveStyle}>
          &nbsp;&nbsp;Shop&nbsp;&nbsp;
        </NavLink>
        <NavLink to="#">About</NavLink>
        <NavLink to="#">Contact</NavLink>
        <NavLink to="#">Sign Up</NavLink>
        <NavLink to="cart" className="iconCart">
          <IoCartOutline />
          {cart.length > 0 && <CartItemsNum>{`${cart.length}`}</CartItemsNum>}
        </NavLink>
      </Wrapper>
    </>
  );
};

export default Navbar;
