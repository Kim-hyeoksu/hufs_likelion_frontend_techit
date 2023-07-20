import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
function Detail() {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const {id} = useParams();  //파라미터를 받는 함수 
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json);
    console.log(json)
    setLoading(false);
  };
  useEffect(()=>{
    getMovies();
  }, []);
  return (
    <div>
      {loading ? 
      <h1>Loading...</h1>
      : (
        <div>
          <h1>{movie.data.movie.title}</h1>
          <img src={movie.data.movie.medium_cover_image}/>
          <p>genre: {movie.data.movie.genres}</p>
          <p>rating: {movie.data.movie.rating}</p>
          <p>year: {movie.data.movie.year}</p>
          <p>description: {movie.data.movie.description_full}</p>

        </div>
      )}
    </div>
  )
}

export default Detail;