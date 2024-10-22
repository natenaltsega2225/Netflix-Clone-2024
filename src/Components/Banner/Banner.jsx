import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "../../utils/axios";
import requests from "../../utils/requests";

const Banner = () => {

  //Initialize state to store a random movie
	const [movie, setMovie] = useState([]);
  
  // applying useEffect hook to fetch data when component mounts
  useEffect(() => {
    // defining an async function to fetch data from the API
    async function fetchData() {

      // make a get request to fetch netflix originals
      const request = await axios.get(requests.fetchNetflixOriginals);

      // set the movie state to a random movie from the response
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    // call the fetch data
    fetchData();
  }, []);
  
  // a function used for to truncate a string to a specified length
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;
