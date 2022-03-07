import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'users',
    }),
    getCategories: builder.query({
      query: () => `categories`,
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: 'users',
        method: 'POST',
        body: user,
      }),
    }),
    createCategory: builder.mutation({
      query: (category) => ({
        url: 'categories',
        method: 'POST',
        body: category,
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
  useCreateUserMutation,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
} = api;
