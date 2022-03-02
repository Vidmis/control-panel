import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useGetCategoriesQuery } from "../features/api";
import Category from "./Categories/Category";

const DropDownMenu = () => {
  const { data: categories } = useGetCategoriesQuery();

  console.log("useGetCategoriesQuery", categories);

  return (
    <div className='dropdown absolute top-20 w-72 -translate-x-60 bg-zinc-700 p-4 overflow-hidden rounded-md'>
      {categories?.map((category) => {
        return (
          <Category
            rightIcon={faAngleDown}
            subCategories={category.subCategories}
          >
            <div className='mx-2 px-1'>{category.categoryName}</div>
          </Category>
        );
      })}
    </div>
  );
};

export default DropDownMenu;
