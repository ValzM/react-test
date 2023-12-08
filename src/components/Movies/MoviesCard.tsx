import { useEffect, useState } from "react"
import { Movie } from "../../interfaces/AppInterface"

interface Props{
    movie: Movie
}

export default function MoviesCard({movie}: Props){

    const [truncatedTitle, setTruncatedTitle] = useState('')

    useEffect(()=>{
        console.log(movie.title.slice(0, -3))
        
        setTruncatedTitle(movie.title.length >= 30 ? movie.title.slice(0,-5) + "..." : movie.title )
    },[])
    return(
        <div className="movies-card">
            <img src={movie.image} alt={movie.title}></img>
            <div className="movies-minimal-info">
                <span>{truncatedTitle}</span>
                <span>{movie.date}</span>
            </div>
        </div>
    )
}