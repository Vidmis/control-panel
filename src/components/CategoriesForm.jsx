import { useState } from 'react';

const CategoriesForm = () => {
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

  const [formValues, setFormValues] = useState(initialValues, (curValues, newValues) => ({
    ...curValues,
    ...newValues,
  }));

  const { category, subCategory, subSubCategory } = formValues;

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormValues((values) => ({ ...values, [name]: value }));
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
        <div className="flex flex-col">
          <input
            className="input-style"
            type="text"
            placeholder="Category"
            name="category"
            value={category}
            onChange={handleChange}
          />
          <input
            className="input-style"
            type="text"
            placeholder="Sub-category"
            name="subCategory"
            value={subCategory}
            onChange={handleChange}
          />
          <input
            className="input-style"
            type="text"
            placeholder="Sub-sub-category"
            name="subSubCategory"
            value={subSubCategory}
            onChange={handleChange}
          />
        </div>

        <button
          //   onClick={() => {
          //     addCategory(randCategory).then(() => categoryData.refetch);
          //   }}
          onClick={passValues}
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
