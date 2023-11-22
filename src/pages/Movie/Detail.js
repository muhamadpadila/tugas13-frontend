import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import GetDetailMovie from '../../utils/networks/GetDetailMovies';
import styled from 'styled-components';

const Detail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [genres, setGenres] = useState([]);

    const url_image = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

    const getDetail = async (id) => {
        const data = await GetDetailMovie(id);
        setMovie(data);
        setGenres(data.genres);
    };

    useEffect(() => {
        getDetail(id);
    }, [id]);

    console.log(movie);

    return (
        <StyledDetail>
            <div className="image-container">
                <img className="movie-image" src={url_image} alt='' />
            </div>
            <div className="details">
                <h1 className="movie-title">{movie.title}</h1>
                <div className="genre-list">
                    {genres.map((item) => (
                        <p key={item.id} className="genre">{item.name}</p>
                    ))}
                </div>
                <Link to="/">
                    <button className="back-button">Back Home</button>
                </Link>
                <h3 className="movie-tagline">{movie.tagline}</h3>
            </div>
        </StyledDetail>
    );
};


const StyledDetail = styled.div`
    font-family: 'Homoarakhn', sans-serif;
    background-color: #f0f0f0;
    color: #333;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column; /* Updated to column layout */
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    .image-container {
        margin-bottom: 1.5rem; /* Adjusted margin for space between image and text */
    }

    .movie-image {
        max-width: 100%;
        height: auto;
        border-radius: 10px;
    }

    .details {
        text-align: center;
    }

    .movie-title {
        font-size: 2rem;
        color: #4361ee;
        margin-bottom: 1rem;
    }

    .genre-list {
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
    }

    .genre {
        background-color: #4361ee;
        color: #fff;
        padding: 8px 16px;
        margin: 0 4px;
        border-radius: 5px;
    }

    .back-button {
        background-color: #4361ee;
        color: #fff;
        padding: 8px 16px;
        margin-top: 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .movie-tagline {
        font-size: 1.2rem;
        color: #64748b;
        margin-bottom: 1rem;
    }
`;

export default Detail;
