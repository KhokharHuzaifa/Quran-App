import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quranApi = createApi({
  reducerPath: "quranApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.alquran.cloud/v1" }),
  endpoints: (builder) => ({
    getWholeQuran: builder.query({
      query: () => "/quran/ar.alafasy",
    }),
    getSingleSurah: builder.query({
      query: (surahNum) => `/surah/${surahNum}/ar.alafasy`,
    }),
  }),
});

export const { useGetWholeQuranQuery, useGetSingleSurahQuery } = quranApi;
