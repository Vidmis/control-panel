import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useGetCategoriesQuery } from '../features/api';

const DropDownMenu = () => {
  const { data: categories } = useGetCategoriesQuery();
  const [expanded, setExpanded] = useState({});

  const onExpandPress = (parentID, isExpanded, level) => {
    setExpanded((currentState) => ({
      ...currentState,
      [parentID]: isExpanded ? level : level + 1,
    }));
  };

  const renderCategories = (categories, group = [], level = 0) => {
    if (Array.isArray(categories)) {
      return categories.map((category, catIndex) => {
        const { id, name, sub_categories } = category;

        const nextGroup = level == 0 ? [id] : [...group, id];
        const parentID = nextGroup[0];
        const isExpanded = expanded[parentID] > level;

        return (
          <div key={`cat_${level}_${catIndex}_${nextGroup.join('_')}`} className="my-2 ml-2">
            <div className="flex flex-row justify-between items-center">
              <a href={`/category/${nextGroup.join('/')}`} className="flex-1 flex mr-4">
                <p>{name}</p>
              </a>
              <span className="h-7 w-7 rounded-full">
                {!!sub_categories && (
                  <span
                    onClick={() => onExpandPress(parentID, isExpanded, level)}
                    className="flex justify-center items-center bg-sky-900 h-full w-full rounded-full cursor-pointer"
                  >
                    <FontAwesomeIcon icon={isExpanded ? faAngleUp : faAngleDown} />
                  </span>
                )}
              </span>
            </div>
            {!!sub_categories &&
              isExpanded &&
              renderCategories(sub_categories, nextGroup, level + 1)}
          </div>
        );
      });
    }

    return null;
  };

  return (
    <div className="dropdown absolute w-72 right-5 top-14 py-2 pr-4 pl-2 bg-sky-700 overflow-hidden shadow-xl shadow-zinc-600 rounded-md">
      {renderCategories(categories)}
    </div>
  );
};

export default DropDownMenu;
