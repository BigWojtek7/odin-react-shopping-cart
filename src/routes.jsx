import App from "./App";
import HomePage from "./components/HomePage/HomePage";
import CartPage from "./components/CartPage/CartPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <HomePage />},
      { path: "homepage", element: <HomePage /> },
      { path: "cart", element: <CartPage /> },
    ],
  },
]

// const routes = [
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "homepage",
//     element: <HomePage />
//   },
//   {
//     path: "cart",
//     element: <CartPage />
//   }
// ];

export default routes;
