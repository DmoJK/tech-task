import { createAsyncThunk } from "@reduxjs/toolkit"
import { $api, rtkApi } from "../../../../app/api/api"

interface editReleaseProps {
  file: File
  uid: string
}

export const editRelease = createAsyncThunk<void, editReleaseProps>(
  "editRelease/editRelease",
  async ({ file, uid }, { rejectWithValue, dispatch }) => {
    try {
      const response = await $api.postForm("/release/update_ava", {
        input_ava: file,
        uid,
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
