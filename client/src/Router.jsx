import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DetailPage from "./components/DetailPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement : <h1>Page not found</h1>,
      children: [
      {
        path: "",
        element: <HomePage />,
        index: true,
        loader: async () => {
          const response = await fetch("https://rickandmortyapi.com/api/character"); 
          const data = await response.json();
          return data
        
      }},
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path : "/detail/:id",
          element : <DetailPage />,
          loader :  ({params}) => fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
          }
      ]
        }
      ]
);

export default router;