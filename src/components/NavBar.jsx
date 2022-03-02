const NavBar = (props) => {
  return (
    <nav className="navigation_menu bg-slate-500 h-20 px-4 text-white">
      <ul className="flex justify-end h-full max-w-full">{props.children}</ul>
    </nav>
  );
};

export default NavBar;
