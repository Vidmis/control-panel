import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
import SubSubCategory from "./SubSubCategory";

const SubCategoryItem = (props) => {
  const [isSubCategoryOpen, setIsSubCategoryOpen] = useState(false);

  return (
    <>
      <a
        href='#'
        className='menu-item text-white pl-3 text-md h-10 py-1 my-2 ml-4 flex items-center rounded-md transition duration-300 ease-in-out hover:bg-zinc-600'
      >
        {props.children}
        <span
          onClick={() => setIsSubCategoryOpen(!isSubCategoryOpen)}
          className='ml-auto px-1 flex justify-center items-center bg-zinc-500 h-8 w-8 rounded-full p-1 m-0.5'
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </span>
      </a>
      {isSubCategoryOpen && (
        <div className='flex flex-col'>
          {props.subSubCategories?.map((subSubCateg) => {
            return (
              <SubSubCategory>{subSubCateg.subSubCategoryName}</SubSubCategory>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SubCategoryItem;
