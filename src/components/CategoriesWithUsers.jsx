import { useParams } from 'react-router-dom';
import { useGetUsersQuery, useGetCategoriesQuery } from '../features/api';

import {CATEGORIES_PATH} from '../constants/route'

const getCategoriesNames = (categoriesPath, categories, names = [], index = 0) => {
  const categoryById = categories.find(cat => cat.id === categoriesPath[index])
  if(categoryById){
    const newNames = [...names, categoryById.name];
    if(categoryById.sub_categories){
      return getCategoriesNames(categoriesPath, categoryById.sub_categories, newNames, index + 1)
    }
    return newNames.join(' > ');
  }
  return names.join(' > ');
}

const CategoriesForm = () => {
    const params = useParams();

    const { data: users, isLoading: usersIsLoading } = useGetUsersQuery();
    const { data: categories, isLoading: categoriesIsLoading } = useGetCategoriesQuery();

    if(usersIsLoading || categoriesIsLoading){
      return <h1>Loading</h1>
    }

    const categoriesPath = CATEGORIES_PATH.filter(path => params[path]).map(path => params[path])

    const usersByRoutePathCategory = users.filter(user => {
      const {categories: userCategories} = user
      if(Array.isArray(userCategories)){
        return userCategories.some(cats => cats.join('').startsWith(categoriesPath.join('')))
      }
      return false
    })

    const categoriesNames = getCategoriesNames(categoriesPath, categories)

    return (
      <>
        <h1>{`Category: ${categoriesNames}`}</h1>
        <h1>{`Users: ${usersByRoutePathCategory.map(user => user.name).join(', ')}`}</h1>
      </>
    );
  };
  
  export default CategoriesForm;
  