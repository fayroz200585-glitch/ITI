import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import Details from "./components/Details";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        path: "details",
        element: <Details subject="React" />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;