import { configureStore } from '@reduxjs/toolkit'
import useReducer from "../slice/userSlice"
export const store = configureStore({
  reducer: {
    users:useReducer,
    // auth: authReducer
  },
})

;  