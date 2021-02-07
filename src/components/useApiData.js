import {useState,useEffect} from 'react';
import axios from 'axios'

export default function useApiData(tvMazeData) {
    const [apiData, setApiData] = useState([]);
    
    useEffect(()=>{
       (async(tvMazeData) =>{
        const response = await axios.get(`https://api.tvmaze.com/shows/${tvMazeData}/cast`)
        setApiData(response.data);
       })(tvMazeData)
    },[tvMazeData])

    return apiData;
}

