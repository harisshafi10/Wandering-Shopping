import { Link } from "react-router-dom";
import '../index.css'
import DarkModeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 shadow-md">
      <div className=" text-xl font-bold light:text-black dark:text-white">
        <Link to="/" className="text-xl font-bold"> Wandering Shopping </Link>
      </div>
        <DarkModeToggle/>
    </nav>
  );
};

export default Navbar;
