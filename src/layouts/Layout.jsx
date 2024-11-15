import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ClientContext } from "../App";

const Layout = () => {
  const { searchStr, setSearchStr } = useContext(ClientContext);

  return (
    <>
      <Navbar />
      <Outlet context={[searchStr, setSearchStr]} />
    </>
  );
};

export default Layout;
