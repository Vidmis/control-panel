import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  const [openCat, setOpenCat] = useState(false);
  const [openSub, setOpenSub] = useState(false);
  const [openSubSub, setOpenSuSub] = useState(false);
  const [addCategory, addedCategoryResult] = useCreateCategoryMutation();
  const [formValues, setFormValues] = useState(initialValues, (curValues, newValues) => ({
    ...curValues,
    ...newValues,
  }));

  const { catVal, subCatVal, subSubCatVal } = formValues;

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormValues((values) => ({ ...values, [name]: value }));
  };

  const passValues = (e) => {
    e.preventDefault();

    console.log('formValues', formValues);
  };

  const onClickOpenCat = () => {
    setOpenCat(!openCat);
    setOpenSub(false);
    setOpenSuSub(false);
  };
  const onClickOpenSub = () => {
    setOpenCat(false);
    setOpenSub(!openSub);
    setOpenSuSub(false);
  };
  const onClickOpenSubSub = () => {
    setOpenCat(false);
    setOpenSub(false);
    setOpenSuSub(!openSubSub);
  };

  console.log('addedCategoryResult', addedCategoryResult);

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
        <div className="flex flex-col">
          <button onClick={onClickOpenCat}>Create Cateogry</button>
          <button onClick={onClickOpenSub}>Create Sub-category</button>
          <button onClick={onClickOpenSubSub}>Create Sub-sub-cateogry</button>

          {openCat && <Category catVal={catVal} handleChange={handleChange} />}
          {openSub && <SubCategory subCatVal={subCatVal} handleChange={handleChange} />}
          {openSubSub && <SubSubCateogry subSubCatVal={subSubCatVal} handleChange={handleChange} />}
        </div>

        <button
          onClick={() => {
            addCategory(formValues).then(() => categoryData.refetch);
          }}
          // onClick={passValues}
          className="px-4 py-2 mt-10 rounded-md text-white bg-sky-500 hover:bg-sky-400"
        >
          Submit
        </button>
        {/* <button
          onClick={() => {
            deleteCategory(5).then(() => categoryData.refetch);
          }}
        >
          Delete
        </button> */}
      </form>
    </div>
  );
};

export default CategoriesForm;
