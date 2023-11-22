import { useEffect, useState } from "react";
import Button from "../ui/Button";
import styled from "styled-components";


function Hero() {

    const [movie, setMovie] = useState("")

    async function getDataApi() {
        const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
         
        const response = await fetch(url)
        const data = await response.json()

       setMovie(data)
    }

    useEffect(
        function(){
            getDataApi()
            
        }, []
    )

    console.log(movie);


    return (
        <HeroStyle>
            <section className={"hero"}>
                <div className={"hero__left"}>
                    <h2 className={"hero__title"}>{movie.Title}</h2>
                    <h3 className={"hero__genre"}>
                        Genre: {movie.Genre}
                    </h3>
                    <p className={"hero__decription"}>
                       {movie.Plot}
                    </p>
                    <Button variant ="primary">Watch</Button>
                    <Button variant ="secondary">Watch</Button>
                </div>
                <div className="hero__right">
                    <img className={"hero__image"}
                    src={movie.Poster}
                    alt="placeholder"/>
                </div>
            </section>
        </HeroStyle>
    )
}

const HeroStyle = styled.div`

    .container {
        margin: 1rem;
    }

    .hero {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .hero__left {
        margin-bottom: 1rem;
    }

    .hero__title {
        color: #4361ee;
        margin-bottom: 1rem;
        font-size: 2.44rem;
    }

    .hero__genre {
        color: #b5179e;
        margin-bottom: 1rem;
        font-size: 1.59rem;
    }
    .hero__button {
        padding: 0.8rem 2rem;
        border: none;
        border-radius: 10px;
        background-color: #4361ee;
        color: #fff;
        }

    .hero__description {
        color: #64748b;
        margin-bottom: 1rem;
        font-size: 1.2rem;
    }

    .hero__image {
        max-width: 100%;
        height: auto;
        margin-top: 1rem;
        border-radius: 25px;
    }


    @media (min-width: 768px) {
        /*
        *Nothing TODO Here.
        *We dont change style Hero.
        */
    }


    @media (min-width: 992px) {
        .container {
            max-width: 1200px;
            margin: 3rem auto;
        }

        .hero {
            margin: 0 1rem;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
        }

        .hero__left {
            flex-basis: 50%;
        }

        .hero__right {
            flex-basis: 40%;
        }
    }
`
export default Hero;