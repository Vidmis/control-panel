import { useState } from 'react';
import { useGetUsersQuery } from '../features/api';
import AssingModal from './AssignModal';

const UserForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: users, error, isLoading } = useGetUsersQuery(1);

  const initialValues = {
    id: 1,
    firstName: '',
    secondName: '',
    email: '',
    password: '',
    confPassword: '',
    age: '',
    gender: '',
    categories: [
      ['1', '1_1'],
      ['2', '2_1'],
    ],
  };

  const [formValues, setFormValues] = useState(initialValues, (curValues, newValues) => ({
    ...curValues,
    ...newValues,
  }));

  const { firstName, secondName, email, password, confPassword, age, gender } = formValues;

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormValues((values) => ({ ...values, [name]: value }));
  };

  const passValues = (e) => {
    e.preventDefault();

    console.log(formValues);
  };

  return (
    <div className="flex flex-row h-fit ">
      <div className="h-fit hidden sm:block sm:w-1/2">
        <img className="w-full h-screen right-36" src="../../public/images/formwallpaper.png" />
      </div>
      <form
        type="submit"
        onSubmit={passValues}
        className="flex flex-col items-center w-full sm:w-1/2"
      >
        <h2 className="text-zinc-600 text-xl font-bold my-5 sm:my-10">Create User</h2>
        <div className="flex flex-col">
          <input
            className="input-style"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={firstName}
            autoComplete="given-name"
            onChange={handleChange}
          />
          <input
            className="input-style"
            type="text"
            placeholder="Second Name"
            name="secondName"
            value={secondName}
            autoComplete="given-name"
            onChange={handleChange}
          />
          <input
            className="input-style"
            type="text"
            placeholder="email@gmail.com"
            name="email"
            value={email}
            autoComplete="email"
            onChange={handleChange}
          />
          <input
            className="input-style"
            type="password"
            placeholder="password"
            name="password"
            value={password}
            autoComplete="password"
            onChange={handleChange}
          />
          <input
            className="input-style"
            type="password"
            placeholder="Confirm Password"
            name="confPassword"
            value={confPassword}
            onChange={handleChange}
          />
          <input
            className="input-style"
            type="text"
            placeholder="Age"
            name="age"
            value={age}
            onChange={handleChange}
          />

          <div className="inline-flex items-center m-2 justify-between">
            <select
              value={gender}
              onChange={handleChange}
              name="gender"
              className="p-2 border bg-zinc-100 border-zinc-400 focus:border-blue-500 text-zinc-400 focus:text-zinc-700 rounded-md w-24"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Uni">Uni</option>
            </select>

            <input
              type="button"
              value="Assign cattegory"
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-400 cursor-pointer"
            />
          </div>
        </div>

        <button
          //   onClick={() => {
          //     addCategory(randCategory).then(() => categoryData.refetch);
          //   }}
          onClick={passValues}
          className="px-4 py-2 mt-10 rounded-md text-white bg-sky-500 hover:bg-sky-400"
        >
          Submit
        </button>
        {/* <button
          onClick={() => {
            deleteCategory(5).then(() => categoryData.refetch);
          }}
        >
          Delete
        </button> */}
      </form>

      {isModalOpen && <AssingModal setIsOpen={setIsModalOpen} />}
    </div>
  );
};

export default UserForm;
