import React, { useState } from "react";
import "./App.css";
import SampleData from "./SampleData/exampleresponse.json";
import ListVideos from "./components/ListVideos";
import Nav from "./components/Nav";
import FormDisabled from "./components/FormDisabled";

function App() {
  const [VideosInfo, setVideosInfo] = useState(SampleData);
  const [searchVideos, setSearchVideos] = useState([]);
  console.log(VideosInfo);

  const addVideo = (title, url) => {
    let newVideo = {
      id: Math.floor(Math.random() * 1000000),
      title: title,
      url: url,
      rating: Math.floor(Math.random() * 10000),
    };
    let updatedList = VideosInfo.concat(newVideo);
    setVideosInfo(updatedList);
  };

  // search prop function
  const search = (e) => {
    e.preventDefault();
    let searchQuery = e.target.value;
    console.log("searching:", searchQuery);

    const filteredResult = VideosInfo.filter((element) => {
      return element.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setSearchVideos(filteredResult);
  };

  // remove a video prop function
  const removeVideo = (id) => {
    const videoCopy = [...VideosInfo];
    console.log(`removed video with id:${id}`);
    const index = videoCopy.findIndex((video) => {
      return video.id === id;
    });
    videoCopy.splice(index, 1);
    setVideosInfo(videoCopy);
  };

  // <AddVideo addVideo={addVideo} />

  return (
    <div className="App">
      <Nav search={search} />

      <header className="App-header">
        <h1 className="text-3xl font-bold underline">Video Recommendations</h1>
      </header>

      <div className="body-section" >


        {searchVideos.length > 0 ? (
          <ListVideos data={searchVideos} delete={removeVideo} />
        ) : (
          <ListVideos data={VideosInfo} delete={removeVideo} />
        )}
        <FormDisabled addVideo={addVideo} />
      </div>

    </div>
  );
}

export default App;
