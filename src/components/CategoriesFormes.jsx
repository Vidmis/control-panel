import { useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NEW_CATEGORY = { name: '' };

const CATEGORY = {
  name: 'Sports',
  sub_categories: [
    {
      name: 'Cycling',
      sub_categories: [
        {
          name: 'Road cycling',
        },
        {
          name: 'MTB cycling',
        },
      ],
    },
    {
      name: 'Cycling 2',
      sub_categories: [
        {
          name: 'Road cycling',
        },
      ],
    },
    {
      name: 'Cycling 3',
    },
  ],
};

const ActionIcon = ({ onClick, add }) => (
  <span className="h-7 w-7 rounded-full">
    <span
      onClick={onClick}
      className="flex justify-center items-center bg-zinc-500 text-white h-full w-full rounded-full cursor-pointer"
    >
      <FontAwesomeIcon icon={add ? faPlus : faMinus} />
    </span>
  </span>
);

const renderCategory = (category, onClick, level = 0, childIndex = 0) => {
  const { sub_categories } = category;

  const levelPlaceHolder = [...new Array(level)]
    .map(() => 'sub')
    .concat('category')
    .join(' ');
  const addIcon = level <= 1;

  const onActionClick = () => onClick && onClick(level, childIndex, addIcon);

  return (
    <div key={`cat_${level}_${childIndex}`} className={level !== 0 ? 'ml-6' : undefined}>
      <div className="flex flex-row items-center">
        <input
          className="input-style"
          type="text"
          placeholder={levelPlaceHolder[0].toUpperCase() + levelPlaceHolder.slice(1)}
        />
        <ActionIcon onClick={onActionClick} add={addIcon} />
      </div>
      {Array.isArray(sub_categories) &&
        sub_categories.map((subCategory, index) =>
          renderCategory(subCategory, onClick, level + 1, index),
        )}
    </div>
  );
};

const CategoriesForm = () => {
  const [newCategories, setNewCategories] = useState(NEW_CATEGORY);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues((values) => {
  //     console.log({ ...values, [name]: value })
  //     return { ...values, [name]: value }
  //   });
  // };

  const onCategoryActionClick = (level, childIndex, add) => {
    console.log('88 line', level, childIndex, add);
    // if(add){

    // }

    setNewCategories((currentCategories) => {
      const updatedCategories = cloneDeep(currentCategories);

      if (add) {
        if (level === 0) {
          updatedCategories.sub_categories = [
            ...(updatedCategories.sub_categories || []),
            NEW_CATEGORY,
          ];
        } else {
          updatedCategories.sub_categories[childIndex] = {
            ...updatedCategories.sub_categories[childIndex],
            sub_categories: [
              ...(updatedCategories.sub_categories[childIndex].sub_categories || []),
              NEW_CATEGORY,
            ],
          };
        }
      } else {
        console.log(updatedCategories.sub_categories);
        // updatedCategories.sub_categories[lev
      }

      return updatedCategories;
    });
  };

  const passValues = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <div className="flex flex-row h-fit ">
      <div className="h-fit hidden sm:block sm:w-1/2">
        <img className="w-full h-screen right-36" src="../../public/images/formwallpaper.png" />
      </div>
      <form
        type="submit"
        onSubmit={passValues}
        className="flex flex-col items-center w-full sm:w-1/2"
      >
        <h2 className="text-zinc-600 text-xl font-bold my-5 sm:my-10">Create Categories</h2>
        <div className="flex flex-col">{renderCategory(newCategories, onCategoryActionClick)}</div>

        <button
          onClick={passValues}
          className="px-4 py-2 mt-10 rounded-md text-white bg-sky-500 hover:bg-sky-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CategoriesForm;
