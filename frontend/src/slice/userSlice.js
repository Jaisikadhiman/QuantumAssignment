import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Base_Url = "http://localhost:5000";
export const adduser = createAsyncThunk("users/adduser", async (values) => {
  console.log("slice user data::", values);

  const user = await axios.post(`${Base_Url}/api/users/register`, values);
  toast.success("Registration successful!");
  return user.data;
});

export const loginUser = createAsyncThunk("users/login", async (values) => {
  try {
    console.log(values);
    const response = await axios.post(`${Base_Url}/api/users/login`, values);
    console.log(response.data);
    if (response.data.status == 200) {
      localStorage.setItem("token", response.data.token);
      toast.success("Login successful!");
      window.location.href = "/list";
    }

    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
});

const initialState = {
  users: [],
  error: null,
  loading: false,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(adduser.pending, (state) => {
        state.loading = true;
      })
      .addCase(adduser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(adduser.rejected, (state, action) => {
        state.loading = false;
        state.action = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export default userSlice.reducer;
