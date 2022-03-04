import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="flex items-center">
      <Link
        to={props.link}
        onClick={() => setOpen(!open)}
        className="flex justify-center items-center bg-sky-900 h-10 w-10 rounded-full p-1 m-0.5 transition duration-300 ease-in-out hover:bg-sky-800"
      >
        <FontAwesomeIcon icon={props.icon} className="text-white" />
      </Link>
      <div className={`dropdown ${open ? 'visible' : 'invisible'}`}>{props.children}</div>
    </li>
  );
};

export default NavItem;
