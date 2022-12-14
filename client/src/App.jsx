import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Artists from './components/Artists/Artists';
import ArtistsDetail from './components/Artists/ArtistsDetail';
import Albums from './components/Albums/Albums';
import AlbumsDetail from './components/Albums/AlbumsDetail';
import Tracks from './components/Tracks/Tracks';
import TracksDetail from './components/Tracks/TracksDetail';
import Home from './components/Home/Home'

const App = () => {

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/artists' element={<Artists />} />
          <Route path='/artists/:id' element={<ArtistsDetail />} />
          <Route exact path='/albums' element={<Albums />} />
          <Route path='/albums/:id' element={<AlbumsDetail />} />
          <Route exact path='/tracks' element={<Tracks />} />
          <Route path='/tracks/:id' element={<TracksDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
