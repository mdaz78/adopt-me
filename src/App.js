import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/" exact>
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
