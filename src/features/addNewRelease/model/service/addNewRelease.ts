import { createAsyncThunk } from "@reduxjs/toolkit"
import { $api, rtkApi } from "../../../../app/api/api"

export const addNewRelease = createAsyncThunk<void, File>(
  "newRelease/addNewRelease",
  async (file, { rejectWithValue, dispatch }) => {
    try {
      const response = await $api.postForm("/release/add", {
        input_ava: file,
      })

      if (!response) {
        throw new Error()
      }

      dispatch(rtkApi.util?.invalidateTags(["Releases"]))

      return response.data
    } catch (e: any) {
      return rejectWithValue(e.response.data.message)
    }
  }
)
