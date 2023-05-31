import React from 'react'
import { useState, useEffect } from 'react'


const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {

    const res = await fetch(url)
    const data = await res.json()
    setTopMovies(data.results)
  }
  useEffect(() => {
    const topRatedMovies = `${moviesURL}top_rated?${apiKey}`
    getTopRatedMovies(topRatedMovies);
  }, [])

  return (
    <div>
      <h2>Home</h2>
      {topMovies && topMovies.map((movie) => <p>{movie.title}</p> )}
    </div>
  )
}

export default Home