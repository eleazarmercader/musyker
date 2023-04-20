import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      // headers.set('X-RapidAPI-Key', 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA');
      headers.set('X-RapidAPI-Key', 'cfdec3a0e9msh06ccb0baa89c0fep1f5be3jsn643b3327dd20');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => 'v1/charts/world' }),
  }),
});

export const {
  useGetTopChartsQuery,
} = shazamCoreApi;
