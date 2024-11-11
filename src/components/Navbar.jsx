import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { ClientContext } from "../App";
import Search from "./Search";

const Wrapper = styled.div`
  /* padding: 1rem; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  font-size: 21px;

  & .menu {
    position: fixed;
    bottom: 0;
    background-color: #116392;
    width: 100%;
    display: flex;
    justify-content: space-between;

    & a {
      color: white;
    }

    @media (min-width: 600px) {
      position: static;
      background-color: #fff;

      & a {
        color: #424242;
      }
    }
  }

  a {
    color: #424242;
    padding: 0.4em 0.6em;
    text-decoration: none;

    &:not(.icon):not(.iconCart) {
      margin: 0 auto;
      font-size: large;
    }
  }

  & a:hover {
    opacity: 75%;
    &:not(.icon):not(.iconCart):not(.searchBtn) {
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
    color: isActive ? "#899ea3" : "",
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
        <Search />
        <div className="menu">
          <NavLink to="shop" style={navLinkActiveStyle}>
            Shop
          </NavLink>
          <NavLink to="#">About</NavLink>
          <NavLink to="#">Contact</NavLink>
          <NavLink to="#">Sign Up</NavLink>
        </div>
        <NavLink to="cart" className="iconCart">
          <IoCartOutline />
          {cart.length > 0 && <CartItemsNum>{`${cart.length}`}</CartItemsNum>}
        </NavLink>
      </Wrapper>
    </>
  );
};

export default Navbar;
