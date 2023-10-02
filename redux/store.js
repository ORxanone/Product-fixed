import { configureStore } from '@reduxjs/toolkit'
import { booksData } from './slices/categorySlices'
import { productsData } from './slices/products'

export const store = configureStore({
  reducer:{
    book:booksData.reducer,
    products:productsData.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck:false
}),
})
