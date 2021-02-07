import React from 'react'
import useApiData from './useApiData';

export default function TvMazeDataList({tvMazeData}) {
    
    const apiData = useApiData(tvMazeData);
    
    return (
        <div className="tvMazeDataList">
            {apiData.map((tvMazeRecord)=>
            (
                <div className="card">
                       <img src={tvMazeRecord.character.image.medium} alt="" className="picture" alt={tvMazeRecord.character.name}/> 
                       <h2>{tvMazeRecord.character.name}</h2>
                </div>)
            )}
        </div>
    )
}
