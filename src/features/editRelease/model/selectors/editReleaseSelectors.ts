import { RootState } from "../../../../app/store"

export const getEditReleaseError = (state: RootState) =>
  state.editRelease?.error
export const getEditReleaseIsLoading = (state: RootState) =>
  state.editRelease?.isLoading
