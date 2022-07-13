// import logo from './logo.svg';
import './App.css';
import ProfilePage from './ProfilePage'


import * as React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Navbar from './Navbar';



function App() {
  return (
    <Routes>
        <Route  path="/" element={<Navbar/>} />
      <Route path="users">
        <Route path=":userId" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}









export default App;
