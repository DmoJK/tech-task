export interface ReleasesResult {
  created_at: string
  updated_at: string
  uid: string
  upc: string
  ava_link: string
  ava_short_link: string
  name: string
  main_singers: string[]
  type: string
  public_date: string
  status: number
  code: string
}

export interface ReleasesResponse {
  status: string
  result: ReleasesResult[]
}
