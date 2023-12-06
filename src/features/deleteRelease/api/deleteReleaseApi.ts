import { rtkApi } from "../../../app/api/api"

const deleteReleaseApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    deleteRelease: build.mutation<any, string>({
      query: (uid) => ({
        url: "/release/delete",
        method: "POST",
        body: { uid },
      }),
      invalidatesTags: ["Releases"],
    }),
  }),
})

export const useDeleteRelease = deleteReleaseApi.useDeleteReleaseMutation
