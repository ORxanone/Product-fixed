
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const products = createAsyncThunk("products", async () => {
  const response = await axios.get("https://newproject2.onrender.com/products")
  return response.data
})

export  const productsData = createSlice({
  name: 'models',
  initialState:{
   data:[],
   loading:true,
   error:""
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(products.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      builder.addCase(products.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      builder.addCase(products.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },

});

export const { } = productsData.actions;

export default productsData.reducer;