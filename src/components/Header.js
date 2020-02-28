import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <nav className = "navigation">
      <Link to ="/"><h2>Home</h2></Link>
      <Link to = "/characters"><h2>Characters</h2></Link>
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
