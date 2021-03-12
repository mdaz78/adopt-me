import { StrictMode, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";

import ThemeContext from "./ThemeContext";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  const theme = useState("darkblue");

  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
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
        </div>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

export default App;
