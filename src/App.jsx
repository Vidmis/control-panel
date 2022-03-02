import { faFile, faTags, faUser } from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import CategoriesForm from './components/CategoriesForm';
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
        </Routes>
      </Router>
    </div>
  );
}

{
  /* <Router>
<NavBar>
  <Switch>
    <Route exact path="/">
      <NavItem to="/" icon={faUser} />
    </Route>
    <Route path="/createCategories">
      <NavItem to="/createCategories" icon={faTags} />
    </Route>
    <Route path="/categories">
      <NavItem icon={faFile}>
        <DropDownMenu />
      </NavItem>
    </Route>
  </Switch>
</NavBar>
</Router> */
}
export default App;
