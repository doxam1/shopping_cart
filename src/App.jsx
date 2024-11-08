import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./components/Home";
import ErrorElement from "./components/ErrorElement";
import Shop from "./components/Shop";
import ShoppingCart from "./components/ShoppingCart";
import { createContext, useState } from "react";

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

  return (
    <>
      <ClientContext.Provider value={{ cart, setCart }}>
        <RouterProvider router={router} />
      </ClientContext.Provider>
    </>
  );
}

export { ClientContext };
export default App;
