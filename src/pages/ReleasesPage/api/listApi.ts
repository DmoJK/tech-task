import { rtkApi } from "../../../app/api/api"
import { ReleasesResponse } from "../model/types/Release"

const ReleasesListApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getList: build.query({
      query: () => ({
        url: "/release/list",
      }),
      providesTags: ["Releases"],
      transformResponse: (response: ReleasesResponse) => response.result,
    }),
  }),
})

export const useGetList = ReleasesListApi.useGetListQuery
