const SubSubCateogry = ({ category, handleChange }) => {
  return (
    <div className="flex justify-center items-center">
      <input
        className="input-style"
        type="text"
        placeholder="Sub-sub-category"
        name="subSubCategory"
        value={category}
        onChange={handleChange}
      />
      <div className="inline-grid">
        <span
          // onClick={handleAdd}
          className="inline-grid mb-1 justify-center items-center w-5 h-5 rounded-full bg-zinc-500 text-white"
        >
          <FontAwesomeIcon icon={faPlus} />
        </span>
        <span className="inline-grid mb-1 justify-center items-center w-5 h-5 rounded-full bg-zinc-500 text-white">
          <FontAwesomeIcon icon={faMinus} />
        </span>
      </div>
    </div>
  );
};

export default SubSubCateogry;
