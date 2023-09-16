const { createSlice } = require("@reduxjs/toolkit")
  
const initialState = {
  category: [],
  toggle: false,
  compToggle:false
}

const categoriesSlies = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.category = action.payload;
    },
    setToogle: (state, action) => {
      state.toggle = action.payload;
    },
    setCompToggle: (state, action) => {
      state.compToggle=action.payload
    }
  },
});

export const { setCategories, setToogle, setCompToggle } = categoriesSlies.actions;
export default categoriesSlies.reducer