import React, { useState } from "react";
import Row from "../Row/Row";
import requests from "../../../utils/requests";


const RowList = () => {
  const [activeTrailer,setActiveTrailer] = useState()
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        activeTrailer = {activeTrailer}
        setActiveTrailer = {setActiveTrailer}
      />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending }
       activeTrailer = {activeTrailer}
       setActiveTrailer = {setActiveTrailer} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies}
       activeTrailer = {activeTrailer}
       setActiveTrailer = {setActiveTrailer} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} 
       activeTrailer = {activeTrailer}
       setActiveTrailer = {setActiveTrailer}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}
       activeTrailer = {activeTrailer}
       setActiveTrailer = {setActiveTrailer} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} 
       activeTrailer = {activeTrailer}
       setActiveTrailer = {setActiveTrailer}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} 
       activeTrailer = {activeTrailer}
       setActiveTrailer = {setActiveTrailer}/>
      <Row title="TV Shows" fetchUrl={requests.fetchTvShow} 
       activeTrailer = {activeTrailer}
       setActiveTrailer = {setActiveTrailer}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}
       activeTrailer = {activeTrailer}
       setActiveTrailer = {setActiveTrailer} />
    </>
  );
};

export default RowList;
