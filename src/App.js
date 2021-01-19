import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const CHARACTERS_URL = 'https://the-one-api.dev/v2/character?sort=name:asc';

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
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/characters">
              <Characters />
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
        <ul>
          {
          this.state.characters && this.state.characters.map(characters => (
            <li key={ characters.id }>
              { characters.name }
              <ul>
                <li>Race: { characters.race }</li>
                <li>Gender: { characters.gender }</li>
                <li>Birth: { characters.birth }</li>
                <li>Death: { characters.death }</li>
                <li>Realm: { characters.realm }</li>
                <li>WikiURL: <a href={ characters.wikiUrl }>{ characters.wikiUrl }</a></li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
