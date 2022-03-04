const NavBar = (props) => {
  return (
    <nav className="navigation_menu w-full bg-gradient-to-r from-slate-800 via-blue-800 to-sky-300 h-14 px-4 text-white">
      <ul className="flex justify-end h-full max-w-full">{props.children}</ul>
    </nav>
  );
};

export default NavBar;
