import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/storeHook';

import './App.css';
import Header from './components/Header/Header';
import { getMovies } from './features/movies/movieSlice';

function App() {
  const { darkTheme, movies } = useAppSelector((state) => state);

  const dispach = useAppDispatch();

  useEffect(() => {
    dispach(getMovies);
  })
  console.log(movies);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className='dark:bg-red-900 dark:text-white min-h-screen px-4 lg:px-12 pb-20'>
        <Header />
      </div>
    </div>
  );
}

export default App;
