import { useState } from "react";
import axios from "axios";
import { actualSeason } from "../const";
import { useDispatch } from "react-redux";
import { setActualSeasonList } from "../actions";

const useGetActualSeason = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function getActualSeasonAnimeLis() {
        try {
            console.log(actualSeason)
          const response = await axios.get(actualSeason);
          dispatch(setActualSeasonList(response.data))
          setLoading(false);
          setError(false);
        } catch (error) {
          setLoading(false);
          setError(error);
        }
    }

    return { loading, error, getActualSeasonAnimeLis };
}

export default useGetActualSeason