import { retry } from '@reduxjs/toolkit/dist/query';
import { useGetCategoriesQuery } from '../features/api';

const AssingModal = (props) => {
  const { data: categories } = useGetCategoriesQuery();

  console.log('categories', categories);

  const closeModal = (e) => {
    if (e.target.classList.contains('backdrop')) {
      props.setIsOpen(false);
    }
  };

  const renderCategories = (categories, group = [], level = 0) => {
    if (Array.isArray(categories)) {
      return categories.map((category, catIndex) => {
        const { id, name, sub_categories } = category;

        const nextGroup = level == 0 ? [id] : [...group, id];

        return (
          <div key={`cat_${level}_${catIndex}_${nextGroup.join('_')}`} className="my-2 ml-2">
            <div className="flex flex-row justify-between items-center">
              <label htmlFor={category.name} className="flex-1 flex mr-4">
                <p>{name}</p>
              </label>
              <input id={category.name} type="checkbox" className="h-7 w-7 rounded-full"></input>
            </div>
            {!!sub_categories && renderCategories(sub_categories, nextGroup, level + 1)}
          </div>
        );
      });
    }

    return null;
  };

  return (
    <>
      <div
        onClick={closeModal}
        className="backdrop absolute top-0 left-0 bg-zinc-700 flex flex-col justify-center items-center bg-opacity-40 w-full h-screen mt-14"
      >
        <div className="flex flex-row w-4/5 h-1/2 bg-zinc-700 rounded-lg items-center justify-center text-white">
          {/* <div>
            <ul>
              {categories?.map((category) => (
                <li>
                  <label htmlFor={category.name}>{category.name}</label>
                  <input id={category.name} type="checkbox" />
                </li>
              ))}
            </ul>
          </div> */}
          {renderCategories(categories)}
        </div>
        <button className="text-white p-2 bg-cyan-500" onClick={() => props.setIsOpen(false)}>
          Close
        </button>
      </div>
    </>
  );
};

export default AssingModal;
