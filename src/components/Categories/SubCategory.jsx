import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SubCategory = ({ subCatVal, handleChange }) => {
  return (
    <div className="flex justify-center items-center">
      <input
        className="input-style"
        type="text"
        placeholder="Sub-category"
        name="subCategory"
        value={subCatVal}
        onChange={handleChange}
      />
    </div>
  );
};

export default SubCategory;
