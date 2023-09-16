import { api } from './api/apiSlice';
import categoriesReducer from './categories/categoriesSlice';
import pcBuilderReducer from './pcBuilder/pcBuilderSlice';
import productReducer from './products/productSlice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    category: categoriesReducer,
    products: productReducer,
    pcBuilder: pcBuilderReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
