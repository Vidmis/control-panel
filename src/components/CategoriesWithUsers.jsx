import { useParams } from 'react-router-dom';
import { useGetUsersQuery, useGetCategoriesQuery } from '../features/api';

import { CATEGORIES_PATH } from '../constants/route';

const getCategoriesNames = (categoriesPath, categories, names = [], index = 0) => {
  const categoryById = categories.find((cat) => cat.id === categoriesPath[index]);
  if (categoryById) {
    const newNames = [...names, categoryById.name];
    if (categoryById.sub_categories) {
      return getCategoriesNames(categoriesPath, categoryById.sub_categories, newNames, index + 1);
    }
    return newNames.join(' > ');
  }
  return names.join(' > ');
};

const CategoriesForm = () => {
  const params = useParams();

  const { data: users, isLoading: usersIsLoading } = useGetUsersQuery();
  const { data: categories, isLoading: categoriesIsLoading } = useGetCategoriesQuery();

  if (usersIsLoading || categoriesIsLoading) {
    return <h1>Loading</h1>;
  }

  const categoriesPath = CATEGORIES_PATH.filter((path) => params[path]).map((path) => params[path]);

  const usersByRoutePathCategory = users.filter((user) => {
    const { categories: userCategories } = user;
    if (Array.isArray(userCategories)) {
      return userCategories.some((cats) => cats.join('').startsWith(categoriesPath.join('')));
    }
    return false;
  });

  const categoriesNames = getCategoriesNames(categoriesPath, categories);

  return (
    <div className="flex justify-center">
      <div className="w-4/5 bg-gradient-to-r from-blue-700 to-sky-500 rounded-lg shadow-lg shadow-zinc-500 m-10 min-w-max pt-5 pb-10 px-5 text-white">
        <h2 className="p-2">
          <span className="text-lg font-bold">Category:</span>
          <div className="ml-5">{categoriesNames}</div>
        </h2>
        <div className="p-2">
          <span className="text-lg font-bold">Assigned users: </span>
          <div className="ml-5 flex flex-col">
            {usersByRoutePathCategory.map((user) => {
              return <span key={user.id}>- {user.name}</span>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesForm;
