import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage'
import Loading from './components/Loading'
import ErrorPage404 from './components/ErrorPage404'
import './css/main.css';

/*import CanvasDraw from "react-canvas-draw";
*/

import './css/components/_ErrorPage404.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/loading">
            <Loading />
          </Route>
          <Route path="/works">
            <h1>Estou no /works</h1>
          </Route>
          <Route path="/works/:id">
            <h1>Estou no /works/id</h1>
          </Route>
          <Route path="/about">
            <h1>Estou no /about</h1>
          </Route>
          <Route path="/contacts">
            <h1>Estou no /contacts</h1>
          </Route>
          <Route path="*">
          <ErrorPage404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
