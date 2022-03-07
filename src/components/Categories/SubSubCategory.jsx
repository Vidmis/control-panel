import { faAdd, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SubSubCateogry = ({ subSubCatVal, handleChange }) => {
  return (
    <div className="flex justify-center items-center">
      <input
        className="input-style"
        type="text"
        placeholder="Sub-sub-category"
        name="subSubCategory"
        value={subSubCatVal}
        onChange={handleChange}
      />
    </div>
  );
};

export default SubSubCateogry;
