const base_url = 'https://api.jikan.moe/v4/'

export const animeDetail = (id) => `${base_url}/anime/${id}`
export const actualSeason = `${base_url}seasons/now`
export const animeByYearAnd = (year,season) => `${base_url}season/${year}/${season}}`