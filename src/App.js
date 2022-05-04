import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Tmdb from './Tmdb';

import Header from "./components/Header";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";

import Home from './Pages/Home';
import Plans from './Pages/Plans';
import Support from './Pages/Support';

import './App.css';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista inteira
      let list = await Tmdb.getHomeList();
      setMovieList(list)

      //pegando o featured
      let originals = list.filter(i => i.slug === 'originals');
      //gerando aleatório de originals
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      //console.log(chosen)
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      //console.log(chosenInfo)
      setFeaturedData(chosenInfo)
    }

    loadAll();
  }, []);

  //useEffect evento header black
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="page">
      <BrowserRouter>
        <Header black={blackHeader} />

        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/products' element={<Plans />}/>
            <Route path='/support' element={<Support />}/>
        </Routes>

        {featuredData &&
          <FeaturedMovie item={featuredData} />
        }

        <section className="lists">
          {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} />
          ))}
        </section>

        <footer>
          Dados extraídos da API <a href="https://www.themoviedb.org/">TMDB</a> <span>❤</span><br />
          &copy;Todos os direitos reservados
        </footer>

        {movieList.length <= 0 &&
          <div className="loading">
            <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" />
          </div>
        }
      </BrowserRouter>
    </div>
  )
}