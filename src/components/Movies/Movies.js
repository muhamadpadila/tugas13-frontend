import React from "react";
import Movie from "../Movie/Movie";
import styled from "styled-components";

const Movies= (props) => {

    const {item, title} = props
    return (
        <MoviesStyle>
            <section className={"movies"}>
                <h2 className={"movies__tittle"}>{title}</h2>
                <div className={"movies__container"}>
                    {
                        item.map(function(data){
                            return(
                                
                                <Movie key={data.id} title={data.title} date={data.release_date} image={data.poster_path} link={data.link} genre={data.genre} id={data.id}/>    
                            )
                        })
                    }
                  </div>
            </section>
        </MoviesStyle>
    )
}

const MoviesStyle = styled.div`
/* Small Screen */
.container {
    margin: 1rem;
}

.movies {
    margin: 5rem 0;
    text-align: center;
}

.movies__tittle {
    margin-bottom: 1rem;
    font-size: 2.44rem;
    color: #4361ee;
}

.movies__container {
    display: flex;
    flex-direction: column;
}

.movies {
    margin-bottom: 1rem;
}

.movies__image {
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
    border-radius: 20px;
}

.movies__tittle {
    color:#4361ee;
    font-size: rem;
    margin-bottom: 0.5rem;
}

.movies__date {
    color: #64748b;
}

/* Medium Screen */
@media (min-width: 768px) {
    .movies__container {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
    }

    .movies {
        flex-basis: 50%;
    }
}

/* Large Screen */
@media (min-width: 992px) {
    .container {
        max-width: 1200px;
        margin: 3rem auto;
    }

    .movies {
        flex-basis: 25%;
        padding: 1rem;
    }
}
`

export default Movies;