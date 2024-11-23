

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./page/MainPage/LandingPage"; // Ensure this path is correct!

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LandingPage />} /> // Define the root route
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
