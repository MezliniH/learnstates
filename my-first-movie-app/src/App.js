import React, { useState} from 'react' ;
import './index.css';
import MovieNav from '/home/mylab/Templates/my-first-movie-app/src/components/navbar/Nav.jsx';
import MovieData from '/home/mylab/Templates/my-first-movie-app/src/components/movieData/MovieData.js';
import MovieList from '/home/mylab/Templates/my-first-movie-app/src/components/movieList/MovieList.jsx';
import Add from '/home/mylab/Templates/my-first-movie-app/src/components/movieCard/addFilms/Add.jsx' ;
function App() {
  const [titleSearch , setTitleSearch]=useState("");
  const getTitleSearch =(input)=>{
    setTitleSearch(input)
  };
  const [rateSearch, setRateSearch] = useState(0);
  const getRateSearch =(input)=>{
    setRateSearch(input)
  };
  const [movieListData, setMovieListData] = useState(MovieData);
  const getMoviesListData=(input)=>{
    setMovieListData([...movieListData ,input]);
  }
  return (
    <div className="App">
     <MovieNav
     getTitleSearch={getTitleSearch}
     getRateSearch={getRateSearch}
     />
     <div className="addMovie">
     <Add getMoviesListData={getMoviesListData}/>
     </div>
     <div className="App-container">
     <MovieList className="Movie-container" 
      movieListData={movieListData} 
      titleSearch={titleSearch}
      rateSearch={rateSearch}/>
     </div>
    </div>
  );
}

export default App;
