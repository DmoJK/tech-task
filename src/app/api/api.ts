import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import axios from "axios"

export const rtkApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev-api-v2.yourtunes.net/api/v2",
    prepareHeaders: (headers) => {
      const token = "Bearer 656e944cee86e3wjx6nzgf2kwkqerb6hw9nf7ssjpfc"
      headers.set("Authorization", token)
      return headers
    },
  }),
  tagTypes: ["Releases"],
  endpoints: (builder) => ({}),
})

export const $api = axios.create({
  baseURL: "https://dev-api-v2.yourtunes.net/api/v2",
})

$api.interceptors.request.use((config) => {
  const token = "Bearer 656e944cee86e3wjx6nzgf2kwkqerb6hw9nf7ssjpfc"

  config.headers["Authorization"] = token

  return config
})
