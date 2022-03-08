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
