import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User } from "../mocks/model";

// Define a service using a base URL and expected endpoints
export const coreApi = createApi({
  reducerPath: "coreApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5173/api/" }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "users",
    }),
    getUserById: builder.query<User, string>({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = coreApi;
