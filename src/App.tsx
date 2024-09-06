import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
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
      path: "/user/:id",
      element: <UserDetails />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);
  return (
    <main className="flex flex-col gap-y-8 font-poppins bg-slate-200">
      <Header />
      <div className="pt-20"></div>
      <RouterProvider router={router} />
      <Footer />
    </main>
  );
}

export default App;
