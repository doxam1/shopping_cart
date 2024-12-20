import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./components/Home";
import ErrorElement from "./components/ErrorElement";
import Shop from "./components/Shop";
import ShoppingCart from "./components/ShoppingCart";
import { createContext, useEffect, useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <ShoppingCart /> },
      { path: "*", element: <ErrorElement /> },
    ],
  },
]);
const ClientContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [searchStr, setSearchStr] = useState(null);

  // get cart on rerenders&page refresh from local storages:
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    if (cartData) setCart(cartData);
  }, []);

  return (
    <>
      <ClientContext.Provider
        value={{ cart, setCart, searchStr, setSearchStr }}>
        <RouterProvider router={router} />
      </ClientContext.Provider>
    </>
  );
}

export { ClientContext };
export default App;
