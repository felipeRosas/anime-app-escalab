
 const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTUAL_SEASON_LIST":
        console.log('action',action)
      return {
        ...state,
        actualSeason: action.payload,
      };
    case "GET_ANIME_LIST_BY_YEAR":
      return {
        ...state,
        animeListByYear: action.payload,
      };
    case "SET_ANIME_DETAIL":
      return {
        ...state,
        animeDetail: action.payload,
      };
    
    case 'REQUEST_ACTUAL_SEASON_ANIME_LIST':
        return {
            ...state,
            loadActualSeasonList:true
        }
    case 'ERROR_GET_ACTUAL_SEASON_ANIME_LIST':
        return {
            ...state,
            loadActualSeasonList:false,
            errorGetActualSeasonList:true
        }
    default:
      return state;
  }
};
export default reducer