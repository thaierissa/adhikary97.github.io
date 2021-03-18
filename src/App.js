import React from "react";
import { Container } from "react-bootstrap";
import LinkList from "./components/LinkList";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MultipleParticles from "./components/MultipleParticles";

const App = () => {
  return (
    <Router>
      <MultipleParticles/>
      <main>
        <Switch>
          <Route path="/" exact>
            <Container>
              <LinkList />
            </Container>
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
