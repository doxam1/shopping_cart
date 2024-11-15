import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ClientContext } from "../App";

const Label = styled.label`
  display: flex;

  #search {
    max-width: 120px;
  }

  .searchBtn {
    color: black;
    border: 1px solid gray;
    border-radius: 0 8px 8px 0;
    background-color: #c1c3c4;
  }
`;

const Search = () => {
  const navigate = useNavigate();
  const { setSearchStr } = useContext(ClientContext);

  const handleSearchInput = (e) => {
    if (e.target.value.indexOf(" ") >= 0) {
      return;
    }
    setSearchStr(e.target.value);
  };

  return (
    <>
      <Label htmlFor="search">
        <input
          type="text"
          id="search"
          onChange={(e) => handleSearchInput(e)}
          onKeyDown={(e) =>
            e.key === "Enter" ? navigate("shop", { replace: true }) : null
          }
        />
        <Link to="shop" className="searchBtn">
          Find
        </Link>
      </Label>
    </>
  );
};

export default Search;
