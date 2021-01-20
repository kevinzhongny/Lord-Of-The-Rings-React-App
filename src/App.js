import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const BOOKS_URL = 'https://the-one-api.dev/v2/book?';
const CHARACTERS_URL = 'https://the-one-api.dev/v2/character?sort=name:asc';
const MOVIES_URL = 'https://the-one-api.dev/v2/movie?';
const QUOTES_URL = 'https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfea0/quote';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Characters">Characters</Link>
              </li>
              <li>
                <Link to="/Movies">Movies</Link>
              </li>
              <li>
                <Link to="/Books">Books</Link>
              </li>
              <li>
                <Link to="/Quotes">Quotes</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/characters">
              <Characters />
            </Route>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/books">
              <Books />
            </Route>
            <Route path="/quotes">
              <Quotes />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
}

class Characters extends React.Component {
  constructor (props) {
    super(props);
    this.state = [];
  }

  async getCharacters() {
    try{
      const res = await axios.get(CHARACTERS_URL, {headers: {Authorization: 'Bearer 9uTC8uqZwMP1lQXd-bhV'}});
      this.setState({ characters: res.data.docs })
    } catch(e) {
      console.error(e.message);
    }

  }

  componentDidMount() {
    this.getCharacters();
  }

  render() {
    return (
      <div>
        <h1>Characters</h1>
        <ul>
          {
          this.state.characters && this.state.characters.map(character => (
            <li key={ character.id }>
              <b>{ character.name }</b>
              <ul>
                <li><b>Race:</b> { character.race }</li>
                <li><b>Gender:</b> { character.gender }</li>
                <li><b>Birth:</b> { character.birth }</li>
                <li><b>Death:</b> { character.death }</li>
                <li><b>Realm:</b> { character.realm }</li>
                <li><b>WikiURL:</b> <a href={ character.wikiUrl }>{ character.wikiUrl }</a></li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

class Movies extends React.Component {
  constructor (props) {
    super(props);
    this.state = [];
  }

  componentDidMount() {
    this.getMovies();
  }

  async getMovies() {
    try {
      const res = await axios.get(MOVIES_URL, {headers: {Authorization: 'Bearer 9uTC8uqZwMP1lQXd-bhV'}});
      this.setState({ movies: res.data.docs });
    } catch (e) {
      console.error(e.message);
    }
  }

  render() {
    return(
      <div>
        <h1>Movies</h1>
        <ul>
          {
            this.state.movies && this.state.movies.map(movie => (
              <li key= { movie.id }>
                <b>{ movie.name }</b>
                <ul>
                  <li>Runtime: { movie.runtimeInMinutes } Minutes</li>
                  <li>Budget: ${ movie.budgetInMillions } Million</li>
                  <li>Revenue: ${ movie.boxOfficeRevenueInMillions } Million</li>
                  <li>Academy Award Nominations: { movie.academyAwardNominations }</li>
                  <li>Academy Award Wins: { movie.academyAwardWins }</li>
                  <li>Rotten Tomatoes Score: { movie.rottenTomatesScore }</li>
                </ul>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

class Books extends React.Component {
  constructor (props) {
    super(props);
    this.state = [];
  }

  async getBooks() {
    try{
      const res = await axios.get(BOOKS_URL, {headers: {Authorization: 'Bearer 9uTC8uqZwMP1lQXd-bhV'}});
      this.setState({ books: res.data.docs });
    } catch(e) {
      console.error(e.message);
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    return(
      <div>
        <h1>Books</h1>
        <ul>
          {
            this.state.books && this.state.books.map(book => (
              <li key={ book.id }>
                <b>{ book.name }</b>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

class Quotes extends React.Component {
  constructor (props) {
    super(props);
    this.state = [];
  }

  async getQuotes() {
    try{
      const res = await axios.get(QUOTES_URL, {headers: {Authorization: 'Bearer 9uTC8uqZwMP1lQXd-bhV'}});
      this.setState({ quotes: res.data.docs });
    } catch(e) {
      console.error(e.message);
    }
  }

  componentDidMount() {
    this.getQuotes();
  }

  render() {
    return(
      <div>
        <h1>Gandalf's Quotes</h1>
        <ul>
          {
            this.state.quotes && this.state.quotes.map(quote => (
              <li key={ quote.id }>
                { quote.dialog }
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
