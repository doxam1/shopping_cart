import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2em;
  background: blue;
  display: flex;
  gap: 1em;
  place-content: center;

  & a {
    padding: 0.4em 0.8em;
    color: black;
    text-decoration: none;
  }
`;
const navLinkActiveStyle = ({ isActive }) => {
  return {
    background: isActive ? "black" : "",
    color: isActive ? "white" : "",
  };
};
const Navbar = () => {
  return (
    <Wrapper>
      <NavLink to="/" style={navLinkActiveStyle}>
        Home
      </NavLink>
      <NavLink to="shop" style={navLinkActiveStyle}>
        Shop
      </NavLink>
    </Wrapper>
  );
};

export default Navbar;
