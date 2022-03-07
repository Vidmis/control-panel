import { faFile, faTags, faUser } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CATEGORIES_PATH } from './constants/route';

import CategoriesForm from './components/CategoriesForm';
import CategoriesWithUsers from './components/CategoriesWithUsers';
import DropDownMenu from './components/DropDownMenu';
import NavBar from './components/NavBar';
import NavItem from './components/NavItem';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar>
          <NavItem link={'/'} icon={faUser} />
          <NavItem link={'categoriesForm'} icon={faTags} />
          <NavItem link={'#'} icon={faFile}>
            <DropDownMenu />
          </NavItem>
        </NavBar>

        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/categoriesForm" element={<CategoriesForm />} />
          {CATEGORIES_PATH.map((path, index) => {
            const pathUrl = `/category/:${CATEGORIES_PATH.slice(0, index + 1).join('/:')}`;
            return (
              <Route key={`cat_path_${path}`} path={pathUrl} element={<CategoriesWithUsers />} />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
