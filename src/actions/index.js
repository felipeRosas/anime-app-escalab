import axios from "axios"
import { actualSeason } from "../const"


export const getActualSeason = (payload) => ({
    type: 'GET_ACTUAL_SEASON',
    payload
})

const loadGetActualSeasonAnimeList = obj => ({
    type: 'REQUEST_ACTUAL_SEASON_ANIME_LIST',
    payload: obj
})
export const setAnimeDetail = payload => ({
    type: 'SET_ANIME_DETAIL',
    payload
})

export const getAnimeListByYear = (payload) => ({
    type: 'GET_ANIME_LIST_BY_YEAR',
    payload
})

export const getAnimeDetail = (payload) => ({
    type: 'GET_ANIME_DETAIL',
    payload
})

export const setActualSeasonList = (payload) => ({
    type: 'SET_ACTUAL_SEASON_LIST',
    payload
})