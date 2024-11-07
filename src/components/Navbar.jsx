import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";

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

    &:not(.icon) {
      /* margin: 0 auto; */
      font-size: large;
    }
  }

  & a:hover {
    opacity: 75%;
    &:not(.icon) {
      text-decoration-line: underline;
      text-underline-offset: 1rem;
      color: #053c4e;
    }
  }

  .icon {
    margin-right: 4rem;
    margin-left: 1rem;
    font-size: 2.5rem;
  }

  /* & a:not(.icon) {
    padding: 0.4em 0.8em;
    color: #aaa;
    text-decoration: none;

    &:hover {
      
    }
  } */
`;

const Header = styled(Wrapper)`
  background-color: #053c4e;
  font-size: medium;

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
  return (
    <>
      <Header>
        <p>
          Need help? please call us{" "}
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
      </Wrapper>
    </>
  );
};

export default Navbar;
