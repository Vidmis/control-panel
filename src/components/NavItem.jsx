import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Router } from 'react-router-dom';

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="flex items-center">
      <Link
        to={props.link}
        onClick={() => setOpen(!open)}
        className="flex justify-center items-center bg-zinc-700 h-10 w-10 rounded-full p-1 m-0.5 transition duration-300 ease-in-out hover:bg-zinc-600"
      >
        <FontAwesomeIcon icon={props.icon} className="text-white" />
      </Link>
      {open && props.children}
    </li>
  );
};

export default NavItem;
