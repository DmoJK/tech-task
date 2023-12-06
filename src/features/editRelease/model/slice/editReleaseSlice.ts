import { editRelease } from "../service/editRelease"
import { createSlice } from "@reduxjs/toolkit"

interface editReleaseSchema {
  error?: string
  isLoading: boolean
}

const initialState: editReleaseSchema = {
  error: undefined,
  isLoading: false,
}

export const editReleaseSlice = createSlice({
  name: "editRelease",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(editRelease.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(editRelease.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(editRelease.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
    })
  },
})

export const {
  actions: editReleaseActions,
  reducer: editReleaseReducer,
  // useActions: useReleaseActions,
} = editReleaseSlice
