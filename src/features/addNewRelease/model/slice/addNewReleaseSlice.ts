import { addNewRelease } from "../service/addNewRelease"
import { createSlice } from "@reduxjs/toolkit"

interface addNewReleaseSchema {
  error?: string
  isLoading: boolean
}

const initialState: addNewReleaseSchema = {
  error: undefined,
  isLoading: false,
}

export const addNewReleaseSlice = createSlice({
  name: "newRelease",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNewRelease.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(addNewRelease.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
    builder.addCase(addNewRelease.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
    })
  },
})

export const {
  actions: newReleaseActions,
  reducer: newReleaseReducer,
  // useActions: useReleaseActions,
} = addNewReleaseSlice
