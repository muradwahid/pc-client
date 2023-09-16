const { api } = require("../api/apiSlice");

const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => '/categories',
    }),
  }),
});

export const {useGetCategoryQuery}=categoryApi