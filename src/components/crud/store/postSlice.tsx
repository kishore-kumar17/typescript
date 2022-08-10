import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};
interface initial {
  loading?: boolean;
  posts?: any;
  error?: string;
}

// actions here

export const fetchUsers = createAsyncThunk("post/fetchUsers", () => {
  return axios.get("http://localhost:9000/posts").then((res) => res.data);
});

export const addUsers: any = createAsyncThunk("post/addusers", (val) => {
  // console.log(val)
  return axios
    .post("http://localhost:9000/posts", val)
    .then((responce) => responce.data);
  // .catch((error)=>error.data)
});

export const deleteUsers: any = createAsyncThunk(
  "post/deleteusers",
  (users: any) => {
    // console.log(users)
    return axios
      .delete(`http://localhost:9000/posts/${users}`)
      .then((res) => res.data);
  }
);

export const editUsers: any = createAsyncThunk(
  "post/editusers",
  (changeval: any) => {
    // console.log(changeval)
    return axios
      .put(`http://localhost:9000/posts/${changeval.id}`, changeval)
      .then((res) => res.data);
  }
);

const postSlice: any = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {},
  extraReducers: (bind) => {
    bind.addCase(fetchUsers.pending, (state: initial) => {
      state.loading = true;
    });
    bind.addCase(fetchUsers.fulfilled, (state: initial, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    });
    bind.addCase(fetchUsers.rejected, (state: initial, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});

export default postSlice;
