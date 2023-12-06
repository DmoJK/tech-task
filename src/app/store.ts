import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { rtkApi } from "./api/api"
import { newReleaseReducer } from "../features/addNewRelease"
import { editReleaseReducer } from "../features/editRelease"

export const store = configureStore({
  reducer: {
    newRelease: newReleaseReducer,
    editRelease: editReleaseReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
