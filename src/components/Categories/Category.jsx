import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import SubCategory from './SubCategory';

const Category = ({ catVal, handleChange }) => {
  const onSubmit = () => {
    console.log('submited category');
  };

  return (
    <div className="flex justify-center items-center">
      <input
        className="input-style"
        type="text"
        placeholder="Category"
        name="category"
        value={catVal}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Category;
