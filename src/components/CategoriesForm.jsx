import { useState } from 'react';
import { useCreateCategoryMutation } from '../features/api';
import Category from './Categories/Category';
import SubCategory from './Categories/SubCategory';
import SubSubCateogry from './Categories/SubSubCategory';

const initialValues = {
  id: '1',
  name: 'Sports',
  sub_categories: [
    {
      id: '1_1',
      name: 'Cycling',
      sub_categories: [
        {
          id: '1_1_1',
          name: 'Road cycling',
        },
        {
          id: '1_1_2',
          name: 'MTB cycling',
        },
      ],
    },
  ],
};

const CategoriesForm = () => {
  const [openCat, setOpenCat] = useState(true);
  const [openSub, setOpenSub] = useState(false);
  const [openSubSub, setOpenSuSub] = useState(false);
  const [addCategory] = useCreateCategoryMutation();
  const [formValues, setFormValues] = useState(initialValues, (curValues, newValues) => ({
    ...curValues,
    ...newValues,
  }));

  const { catVal, subCatVal, subSubCatVal } = formValues;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((values) => ({ ...values, [name]: value }));
  };

  const onClickOpenCat = () => {
    setOpenCat(true);
    setOpenSub(false);
    setOpenSuSub(false);
  };
  const onClickOpenSub = () => {
    setOpenCat(false);
    setOpenSub(true);
    setOpenSuSub(false);
  };
  const onClickOpenSubSub = () => {
    setOpenCat(false);
    setOpenSub(false);
    setOpenSuSub(true);
  };

  return (
    <div className="flex flex-row h-fit ">
      <div className="h-fit hidden sm:block sm:w-1/2">
        <img className="w-full h-screen right-36" src="../../public/images/formwallpaper.png" />
      </div>
      <form type="submit" className="flex flex-col items-center w-full sm:w-1/2">
        <h2 className="text-zinc-600 text-xl font-bold my-5 sm:my-10">Create Categories</h2>
        <div className="flex flex-col">
          <div className="flex flex-row items-start">
            <button
              className="p-2 mb-2 w-24 mx-1 bg-blue-400 rounded-md text-white"
              onClick={onClickOpenCat}
            >
              Category
            </button>
            <button
              className="p-2 mb-2 w-24 mx-1 bg-blue-500 rounded-md text-white"
              onClick={onClickOpenSub}
            >
              Sub
            </button>
            <button
              className="p-2 mb-2 w-24 mx-1 bg-blue-600 rounded-md text-white"
              onClick={onClickOpenSubSub}
            >
              Sub-sub
            </button>
          </div>
        </div>
        {openCat && <Category catVal={catVal} handleChange={handleChange} />}
        {openSub && <SubCategory subCatVal={subCatVal} handleChange={handleChange} />}
        {openSubSub && <SubSubCateogry subSubCatVal={subSubCatVal} handleChange={handleChange} />}

        <button
          onClick={() => {
            addCategory(initialValues).then(() => categoryData.refetch);
          }}
          className="px-4 py-2 mt-10 rounded-md text-white bg-sky-500 hover:bg-sky-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CategoriesForm;
