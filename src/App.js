import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Popular from './pages/Popular';
import Add from './pages/Add';
import Layout from './Layouts/Layout';
import { useState } from 'react';
import DataMovies from './utils/constants/DataMovie'
import GlobalStyle from './components/Global/GlobalStyle';
import Upcoming from './pages/Upcoming';
import Detail from './pages/Movie/Detail'



function App() {

const [data, setData] = useState(DataMovies)


  return (
   <>
   <GlobalStyle /> 
   <Layout>
      <Routes> 
        <Route path='/' element={<Home item={data} setItem={setData}/>}/>
        <Route path='/bebek' element={<Popular/>}/>
        <Route path='/ayam' element={<Add item={data} setItem={setData}/>}/>
        <Route path='/upcoming' element={<Upcoming />}/>
        <Route path='/movie/:id' element={<Detail />}/>
      </Routes>
    </Layout>
   
   </>
  )
}

export default App;
