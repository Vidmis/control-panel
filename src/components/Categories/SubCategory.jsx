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
