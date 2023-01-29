import React from "react";

const Header = () => {
  const Menus = [
    {
      title: "Work",
      url: "/work",
    },
    {
      title: "Profile",
      url: "/profile",
    },
  ];

  return (
    <nav className="navbar navbar-dark bg-dark text-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
    </nav>
  );
};

export default Header;
