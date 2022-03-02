import { useState } from 'react';
import { useGetUsersQuery } from '../features/api';

const UserForm = () => {
  const [val, setVal] = useState();
  const { data: users, error, isLoading } = useGetUsersQuery(1);

  return (
    <div>
      <form>
        <h2>Create User</h2>
        <div>
          <input
            type="text"
            placeholder="First Name"
            name="fName"
            // value={}
            autoComplete="given-name"
            // onChange={}
          />
          <input
            type="text"
            placeholder="Second Name"
            name="sName"
            // value={}
            autoComplete="email"
            // onChange={}
          />
          <input
            type="text"
            placeholder="email@gmail.com"
            name="email"
            // value={}
            autoComplete="given-name"
            // onChange={}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            // value={}
            autoComplete="password"
            // onChange={}
          />
        </div>

        <button
          onClick={() => {
            addCategory(randCategory).then(() => categoryData.refetch);
          }}
        >
          Click me
        </button>
        <button
          onClick={() => {
            deleteCategory(5).then(() => categoryData.refetch);
          }}
        >
          Delete
        </button>
      </form>
    </div>
  );
};

export default UserForm;
