import React,{useState} from 'react'
import './App.css';
import TvMazeDataList from './components/TvMazeDataList';

function App() {

  const [tvMazeData, setTvMazeData] = useState('Friends');

  return (
    <div>
      <div className="App">
        <button className="btn styleTop" onClick={()=>setTvMazeData('82')}>GoT</button>
        <button className="btn styleBottom" onClick={()=>setTvMazeData('431')}>Friends</button>
        <button className="btn styleBottom" onClick={()=>setTvMazeData('169')}>Breaking Bad</button>
        <button className="btn styleBottom" onClick={()=>setTvMazeData('143')}>Silicon Valley</button>
        <button className="btn styleBottom" onClick={()=>setTvMazeData('1871')}>Mr Robot</button>
     </div>
     <TvMazeDataList tvMazeData={tvMazeData}/>
    </div> 
  );
}

export default App;
