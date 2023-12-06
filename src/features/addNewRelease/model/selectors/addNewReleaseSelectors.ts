import { RootState } from "../../../../app/store"

export const getAddReleaseError = (state: RootState) => state.newRelease?.error
export const getAddReleaseIsLoading = (state: RootState) =>
  state.newRelease?.isLoading
