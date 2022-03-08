import { retry } from '@reduxjs/toolkit/dist/query';
import { useEffect, useState } from 'react';
import { useGetCategoriesQuery } from '../features/api';

const AssingModal = (props) => {
  const { data: categories } = useGetCategoriesQuery();
  const [level, setLevel] = useState([]);

  const closeModal = (e) => {
    if (e.target.classList.contains('backdrop')) {
      props.setIsOpen(false);
    }
  };

  const handleClick = (group) => {
    setLevel(group);
  };

  const handleSubmit = () => {
    props.setIsOpen(false);
  };

  useEffect(() => {
    console.log('level', level);
  }, [level]);

  const renderCategories = (categories, group = [], level = 0) => {
    if (Array.isArray(categories)) {
      return categories.map((category, catIndex) => {
        const { id, name, sub_categories } = category;

        const nextGroup = level == 0 ? [id] : [...group, id];

        // console.log(nextGroup);

        return (
          <div
            key={`cat_${level}_${catIndex}_${nextGroup.join('_')}`}
            className="ml-2 pl-2 min-w-max first:mt-8 last:mb-5 sm:first:mt-0 sm:last:mb-0"
          >
            <div className="flex flex-row justify-between items-center">
              <label htmlFor={category.name} className="flex-1 flex mr-4 border-l-2 pl-2">
                <p>{name}</p>
              </label>
              <input
                onChange={() => handleClick(catIndex)}
                id={category.name}
                type="checkbox"
                className="h-4 w-4 rounded-full"
              ></input>
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
        <div className="w-4/5 sm:w-4/5 sm:h-1/2 relative bg-gradient-to-br from-indigo-600 to-blue-800 rounded-lg shadow-xl text-white">
          <button
            className="text-white p-2 absolute top-0 right-0 bg-indigo-900 rounded-lg px-4 text-2xl font-bold"
            onClick={() => props.setIsOpen(false)}
          >
            X
          </button>
          <div className="w-full h-full flex flex-col sm:flex-row justify-center items-center">
            {renderCategories(categories)}
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 mt-5 rounded-md text-white bg-sky-500 hover:bg-sky-400"
        >
          Sumbit
        </button>
      </div>
    </>
  );
};

export default AssingModal;
