import { api } from './api/apiSlice';
import categoriesReducer from './categories/categoriesSlice';
import productReducer from './products/productSlice';

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    category: categoriesReducer,
    products: productReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store