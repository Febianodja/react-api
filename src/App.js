import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Api from './Pages/Api'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Api />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
