import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search/search-box.component";
import "./App.css";
export default class App extends Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      monsters: [],
      searchMonster: ""
    };
  }

  handleChange = e => {
    this.setState({ searchMonster: e.target.value });
  };
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentDidMount() {
    console.log("componentDidMount");
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(user => this.setState({ monsters: user }));
  }
  componentWillMount() {
    console.log("componentWillMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps);
    return true;
  }
  render() {
    console.log("render");
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
