import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (userId) => `users/${userId}`,
    }),
    getCategories: builder.query({
      query: () => `categories`,
      //   query: (categoryName) => `categories/${categoryName}`,
    }),
    createCategory: builder.mutation({
      query: (user) => ({
        url: `categories`,
        method: 'POST',
        body: user,
      }),
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `categories/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
} = api;
