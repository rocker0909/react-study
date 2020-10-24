import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/SearchHeader';
import VideoList from './components/video/list/VideoList';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const search = query =>{
    youtube
    .search(query)
    .then(videos => setVideos(videos));
  }
  useEffect(() =>{
    youtube
    .mostPopular()
    .then(videos => setVideos(videos));
  },[])
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <VideoList videos={videos}/>
    </div>
  );
}

export default App;
