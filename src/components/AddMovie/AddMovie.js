import React, {useState} from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';


const AddMovie = (props) => {
    const {movies, setMovies} = props

    
    const [title, setTitle] =useState("")
    const [date, setDate] =useState("")
    const [image, setImage] =useState("")
    const [genre, setGenre] =useState("")

    const handleTitle = (e) => {
        setTitle(e.target.value)
        
    }
    const handleImage = (e) => {
        setImage(e.target.value)
        
    }
    const handlegenre = (e) => {
        setGenre(e.target.value)
        
    }
    const handleDate = (e) => {
        setDate(e.target.value)
        
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        


        if (title === "" && date === "") { alert("title dan date kosong") }
        else if (title === "") { alert("title kosong") } 
        else if (date === "") { alert("date kosong") } 
        else {

        const movie = {
            id:11,
            title: title,
            date: date,
            image: image,
            genre: genre,
        }
        setMovies([...movies, movie])
        alert("berhasil")
        
    }
    }
    return (
        <AddMovieStyle>
       <form className={"addmovie"} onSubmit={handleSubmit}>
        <h1 className={"addmovie__title"} >add movie</h1>
       <input className={"addmovie__input"} id='title' type='text' value={title} onChange={handleTitle} placeholder="Masukkan judul" />
       <input className={"addmovie__input"} id='image' type='text' value={image} onChange={handleImage} placeholder="Masukkan link" />
       <select className={"addmovie__input"} id='genre' type='option' value={genre} onChange={handlegenre} placeholder="Masukkan genre" >
       <option value="">Pilih Genre</option>
        <option value="horor">Horor</option>
        <option value="action">Action</option>
        <option value="drama">Drama</option>
        <option value="komedi">Komedi</option>
        <option value="romansa">Romansa</option>
        <option value="fantasi">Fantasi</option>
        <option value="fiksi ilmiyah">Fiksi Ilmiah</option>
        <option value="petualang">Petualang</option>
        <option value="sejarah">Sejarah</option>
       </select>
        <input className={"addmovie__input"} id='date' type='date' value={date} onChange={handleDate} />
        <Button  variant ="primary">simpan</Button>
       </form>
        </AddMovieStyle>
    );
}

const AddMovieStyle = styled.div`

margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

.addmovie {
    margin: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem;
    border-radius: 20px;
    border-style: solid;
    background-color: rgb(22, 60, 104);
    border-color: rgb(245, 121, 32);
}

.addmovie__title {
    margin-top: 1rem;
    color: white;
    text-align: center;
    font-size: 1.6rem;
}

.addmovie__input {
    display: inline-block;
    box-sizing: border-box;
    border-radius: 7px;
    margin: 1rem;
    width: 250px;
    height: 30px;
    font
}

.addmovie__button {
    text-align: center;
    margin: 1rem;
    width: 250px;
    height: 30px;
    border: none;
    color: white;
    padding: 10px;
    background-color: burlywood;
}

@media (min-width: 768px) {
    .addmovie {
        margin: 8px;
        max-width: 330px;
        height: auto;
    }
    .addmovie__input {
        width: 260px;
    }
}
`

export default AddMovie;
