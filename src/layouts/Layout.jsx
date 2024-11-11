import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const [searchStr, setSearchStr] = useState("");

  return (
    <>
      <Navbar />
      <Outlet context={[searchStr, setSearchStr]} />
    </>
  );
};

export default Layout;
