import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

function Home() {
  
  const[loading, setLoading] = useState(true);
  const[movies, setMovies] = useState([]);

  //* fetch .then 대신 async - await 사용하는 코드
  const getMoives = async() => {
    
    //* const response 와 똑같이 작동하는 코드
    const json = await (
      await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    
    // const response = await fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    // );
    // const json = await response.json();
    
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {

    getMoives();

    // fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setMovies(json.data.movies)
    //     setLoading(false)
    //   })

  }, [])

  console.log(movies);

  return (
    <div className={styles.container}>
      <AnchorLink href="#things">
        <div className={styles.menu}>클릭하면 이동</div>
      </AnchorLink>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home