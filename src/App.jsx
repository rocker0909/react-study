import React, { useState, useEffect } from 'react';
import './app.css';
import VideoList from './components/videoList/VideoList';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() =>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos/?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyASq356AgToS4xtGOCuubSxJhOU4xZx66w", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[])
  return (
    <VideoList videos={videos}/>
  );
}

export default App;
