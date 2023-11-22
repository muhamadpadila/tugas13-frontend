import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Movie = (props) => {
  const { title, date, image, genre, id } = props;
  const url_image = `https://image.tmdb.org/t/p/w300/${image}`;

  return (
    <MovieStyle>
      <Link to={`movie/${id}`}>
        <img className="movie__image" src={url_image} alt="" />
        <h4 className="movie__title">{title}</h4>
      </Link>
      <div className="movie__details">
        <h5 className="movie__genre">{genre}</h5>
        <p className="movie__date">{date}</p>
      </div>
    </MovieStyle>
  );
};

const MovieStyle = styled.div`
  margin-bottom: 1.5rem;

  a {
    text-decoration: none;
    color: inherit;
  }

  .movie__image {
    border-radius: 10px;
    max-width: 100%;
    height: auto;
    margin-bottom: 0.5rem;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  .movie__title {
    font-family: 'Spiderman', sans-serif; /* Add the Spiderman font here */
    font-size: 1.5rem;
    margin: 0.5rem 0;
    color: #4361ee;
  }

  .movie__details {
    display: flex;
    flex-direction: column;

    
    align-items: flex-start;
  }

  .movie__genre {
    color: #64748b;
    font-size: 0.9rem;
    margin-bottom: 0.2rem;
  }

  .movie__date {
    color: #64748b;
    font-size: 0.8rem;
    margin: 0;
  }

  @media (min-width: 768px) {
    .movie__details {
      align-items: center;
      margin-top: 0.5rem;
    }
  }

  @media (min-width: 992px) {
    flex-basis: 25%;
    padding: 1rem;
  }
`;

export default Movie;
