
import './App.css';
import Container from './components/Container';
import MapFlag from './components/MapFlag';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact  path="/:name" render={(props)=> <MapFlag {...props}/>}></Route>
          <Route exact path="/">
            <Container   />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
