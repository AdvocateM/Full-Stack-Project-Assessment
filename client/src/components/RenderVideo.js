import React from "react";
import VotesUpDown from "./VotesUpDown";

const RenderVideo = (props) => {
  const deleteHandler = () => {
    props.delete(props.videoId);
  };


  return (
    <div className="Video-card">
      <ul className="Card-List">
        <li>
          <h4>{props.title}</h4>
        </li>
        <li>
          <VotesUpDown />
        </li>
        <li>
          <h6>Rating: {props.rating}</h6>
        </li>
        <li>
          <iframe
            width="560"
            height="315"
            src={props.Url}
            title={props.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </li>
        <li>
          <button onClick={deleteHandler} type="button" className="py-2 px-4 bg-purple-600 text-black font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Delete Video
          </button>

        </li>
      </ul>
    </div>
  );
};

export default RenderVideo;
