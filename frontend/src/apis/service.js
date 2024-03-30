// api fetching code will here 
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://pokeapi.co/api/v2/';
export const ServiceApi = createApi({
    reducerPath: 'Service',
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name) => `pokemon/${name}`,
        }),
    }),
})

export const {useGetPokemonByNameQuery} = ServiceApi;