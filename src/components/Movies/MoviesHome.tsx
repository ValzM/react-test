import { useEffect, useState } from 'react';
import '../../styles/Movies.css'
import '../../styles/MoviesCard.css'
import { Movie } from '../../interfaces/AppInterface';
import MoviesCard from './MoviesCard';

const API_KEY = 'fa9fa8cea08d0887af40c81bb7fe8c9e'
const baseImageUrl = 'https://image.tmdb.org/t/p/w500/'

export default function MoviesHome() {

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

    const [moviesList, setMoviesList] = useState<Movie[]>([])

    const getMovies = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()

            const formattedMovies = data.results.map((movie: any) => ({
                id: movie.id, title: movie.title,
                image: baseImageUrl + movie.backdrop_path,
                date: movie.release_date
            } as Movie))

            setMoviesList([...formattedMovies])
        } catch (error) {
            console.error("Error", error)
        }

    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div className='movies-container'>
            <h2>Découvrez de nouveaux films</h2>
            <div className='movies-wrapper'>
                {
                    moviesList.map((movie) => (

                        <MoviesCard key={movie.id} movie={movie} />

                    ))
                }
            </div>

        </div>
    )
}