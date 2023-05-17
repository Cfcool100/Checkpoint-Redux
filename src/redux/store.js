import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './redux';

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
})