import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface IInfo {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

interface IResult {
  id: number
  name: string
  status: string
  species: string
  image: string
  gender: string  
   created:  string
   origin: {
    name: string
   }
   location: {
    name: string
   }
}

interface ICharacter {
  info: IInfo
  results: IResult[]
}

// https://redux-toolkit.js.org/rtk-query/usage/examples
export const CharactersApi = createApi({
  reducerPath: 'chracters',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api',
  }),

  endpoints: builder => ({
    getPosts: builder.query<ICharacter, void>({
      query: () => {
        return {
          url: '/character',
          method: 'GET',
        }
      },
    }),
  }),
})

export const { useGetPostsQuery } = CharactersApi
