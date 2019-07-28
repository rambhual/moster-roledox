import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import Card from "./components/card/card.component";
import "./App.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchMonster: ""
    };
  }
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(user => this.setState({ monsters: user }));
  }
  render() {
    return (
      <React.Fragment>
        <input
          type="search"
          onChange={e => this.setState({ searchMonster: e.target.value })}
          className="input has-text-center w-50"
          placeholder="Search monster"
        />
        <CardList>
          {this.state.monsters.map(monster => (
            <Card key={monster.name} monster={monster} />
          ))}
        </CardList>
      </React.Fragment>
    );
  }
}
