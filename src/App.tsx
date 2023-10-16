import Navbar from './components/Navbar';
import Recipe from './components/Recipe';
import Cocktail from './components/Cocktail';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";


function App() {

  const Layout = () => {
    return (
      <div className='h-[100vh] overflow-scroll bg-gradient-to-r from-slate-100 via-purple-100 to-sky-100'>
        <Navbar />
        <Outlet />
    </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
          <Layout />
      ),
      children: [
        {
          path: "/",
          element: <Recipe />,
        },
        {
          path: "/cocktail",
          element: <Cocktail />,
        },
      ],
    }
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;
