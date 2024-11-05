import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Function to close the drawer
  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="./" className="logo">
          <img src={logo} alt="logo" className="" />
          <span className="">VirtualR</span>
        </a>

        <nav className="navbar-menu">
          {navItems.map((i, ind) => (
            <a key={ind} href={i.href}>
              {i.label}
            </a>
          ))}
        </nav>

        <div className="navbar-btns">
          <a href="#" className="btn-bd">
            Sign In
          </a>
          <a href="#" className="btn">
            Create an account
          </a>
        </div>

        <div className="navbar-toggler">
          <button onClick={toggleNavbar}>
            {drawerOpen ? <X /> : <Menu />}
          </button>
        </div>

        {drawerOpen && (
          <nav className="drawer">
            <ul>
              {navItems.map((i, ind) => (
                <li key={ind}>
                  <a href={i.href} onClick={closeDrawer}>
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
            <hr className="divider mt-auto mb-8" />
            <div className="drawer-btns">
              <a href="#" className="btn-bd w-full" onClick={closeDrawer}>
                Sign In
              </a>
              <a href="#" className="btn w-full" onClick={closeDrawer}>
                Create an account
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
