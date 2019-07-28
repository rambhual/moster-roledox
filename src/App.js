import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search/search-box.component";
import "./App.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchMonster: ""
    };
  }

  handleChange = e => {
    this.setState({ searchMonster: e.target.value });
  };
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(user => this.setState({ monsters: user }));
  }
  render() {
    const { monsters, searchMonster } = this.state;
    const searchedMonsters = monsters.filter(m =>
      m.name.toLowerCase().includes(searchMonster.toLowerCase())
    );
    return (
      <React.Fragment>
        <SearchBox handler={this.handleChange} placeholder="Search monster" />
        <CardList monsters={searchedMonsters} />
      </React.Fragment>
    );
  }
}
