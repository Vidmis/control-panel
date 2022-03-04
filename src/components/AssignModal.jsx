import { retry } from '@reduxjs/toolkit/dist/query';
import { useGetCategoriesQuery } from '../features/api';

const AssingModal = (props) => {
  const { data: categories } = useGetCategoriesQuery();

  console.log('categories', categories);

  const closeModal = (e) => {
    if (e.target.classList.contains('backdrop')) {
      props.setIsOpen(false);
    }
  };

  return (
    <>
      <div
        onClick={closeModal}
        className="backdrop absolute top-0 left-0 bg-zinc-700 flex flex-col justify-center items-center bg-opacity-40 w-full h-screen"
      >
        <div className="flex flex-row w-1/2 h-1/2 bg-zinc-700 rounded-lg items-center justify-center text-white">
          <div>
            <ul>
              {categories?.map((category) => (
                <li>{category.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <button className="text-white p-2 bg-cyan-500" onClick={() => props.setIsOpen(false)}>
          Close
        </button>
      </div>
    </>
  );
};

export default AssingModal;
