import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <nav>
      <Link to ="/">Home</Link>
      <Link to = "/characters">Characters</Link>
      </nav>

      <Switch>
      <Route path = "/characters">
        <CharacterList/>
      </Route>

      <Route path = "/">
        <WelcomePage/>
      </Route>
      </Switch>

    </header>
  );
}
