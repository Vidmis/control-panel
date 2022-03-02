import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import SubCategory from "./SubCategory";

const Category = (props) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <>
      <a
        href='#'
        className='menu-item text-white text-lg h-10 py-1 my-2 flex items-center rounded-md transition duration-300 ease-in-out hover:bg-zinc-600'
      >
        {props.children}
        <span
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          className='ml-auto px-1 flex justify-center items-center bg-zinc-500 h-10 w-10 rounded-full p-1 m-0.5'
        >
          <FontAwesomeIcon icon={props.rightIcon} />
        </span>
      </a>
      {isCategoryOpen &&
        props.subCategories?.map((subCategory) => {
          return (
            <div className='flex flex-col'>
              <SubCategory subSubCategories={subCategory.subSubCategories}>
                {subCategory.subCategoryName}
              </SubCategory>
            </div>
          );
        })}
    </>
  );
};

export default Category;
