const SubSubCategory = (props) => {
  return (
    <a
      className='menu-item text-white px-3 text-sm h-10 py-1 my-2 ml-6 flex items-center rounded-md transition duration-300 ease-in-out hover:bg-zinc-600'
      href='#'
    >
      {props.children}
    </a>
  );
};

export default SubSubCategory;
