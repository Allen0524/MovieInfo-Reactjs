import PosterList from './components/posterList/PosterList.jsx';
import Nav from './components/nav/Nav.jsx';
import Banner from './components/banner/Banner.jsx';
import LiveNews from './components/liveNews/LiveNews.jsx';
import TvRank from './components/tvRank/TvRank.jsx';
import Footer from './components/footer/Footer.jsx';
import MovieInfo from './components/movieInfo/MovieInfo.jsx';
import Category from './components/category/Category.jsx';
import SearchMovie from './components/searchMovie/SearchMovie.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/movieList" exact>
            <PosterList />
          </Route>
          <Route path="/trending" exact>
            <PosterList />
          </Route>
          <Route path="/movies/:movieId" exact>
            <MovieInfo />
          </Route>
          <Route path="/category" exact>
            <Category />
          </Route>
          <Route path="/searchMovie" exact>
            <SearchMovie />
          </Route>
          <Route path="/" exact>
            <Banner />
            <LiveNews />
            <TvRank />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
