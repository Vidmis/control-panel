import { useState } from 'react';
import { useGetCategoriesQuery } from '../features/api';
import Select from 'react-select';

const AssingModal = (props) => {
  const { data } = useGetCategoriesQuery();
  const [category, setCategory] = useState([]);
  const [subCat, setSubCat] = useState([]);
  const [subSubCat, setSubSubCat] = useState([]);

  const [subList, setSubList] = useState([]);
  const [subSubList, setSubSubList] = useState([]);

  const closeModal = (e) => {
    if (e.target.classList.contains('backdrop')) {
      props.setIsOpen(false);
    }
  };

  const checkIds = (id) => {
    // if (props.value.includes(id)) {
    //   props.setCatAssignValues(value.filter((item) => item !== id));
    // } else {
    //   props.setCatAssignValues([...props.value, id]);
    // }
    const catIds = (() => {
      if (props.value.includes(id)) {
        return props.value.filter((item) => item !== id);
      }
      return [...props.value, id];
    })();

    props.onChange({ target: { name: props.name, value: catIds } });
  };

  const handleCatChange = (obj) => {
    setCategory(obj);
    checkIds(obj.id);
    setSubList(obj.sub_categories);
    setSubCat(null);
    setSubSubCat(null);
  };

  const handleSubCatChange = (obj) => {
    setSubCat(obj);
    checkIds(obj.id);
    setSubSubList(obj.sub_categories);
    setSubSubCat(null);
  };

  const handleSuSubCatChange = (obj) => {
    setSubSubCat(obj);
    checkIds(obj.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setIsOpen(false);
  };

  return (
    <>
      <div
        onClick={closeModal}
        className="backdrop absolute top-0 left-0 bg-zinc-700 flex flex-col justify-center items-center bg-opacity-40 w-full h-screen mt-14"
      >
        <div className="w-4/5 sm:w-4/5 sm:h-1/2 relative bg-gradient-to-br from-indigo-600 to-blue-800 rounded-lg shadow-xl">
          <button
            className="text-white p-2 absolute top-0 right-0 bg-indigo-900 rounded-lg px-4 text-2xl font-bold"
            onClick={() => props.setIsOpen(false)}
          >
            X
          </button>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <Select
              options={data}
              value={category}
              onChange={handleCatChange}
              getOptionLabel={(x) => x.name}
              getOptionValue={(x) => x.name}
              placeholder="Category"
              className="w-64 my-4"
            />
            <Select
              options={subList}
              value={subCat}
              onChange={handleSubCatChange}
              getOptionLabel={(x) => x.name}
              getOptionValue={(x) => x.name}
              placeholder="Sub-category"
              className="w-64 my-4"
            />
            <Select
              options={subSubList}
              value={subSubCat}
              onChange={handleSuSubCatChange}
              getOptionLabel={(x) => x.name}
              getOptionValue={(x) => x.name}
              placeholder="Sub-sub-category"
              className="w-64 my-4"
            />
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
