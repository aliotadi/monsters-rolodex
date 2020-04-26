import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import { Scroll } from "./components/scroll/scroll.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodecs</h1>
        <SearchBox
          placeholder="search monsters"
          changeHandler={this.changeHandler}
        />
        <Scroll>
          <CardList monsters={filteredMonsters} />
        </Scroll>
      </div>
    );
  }

  changeHandler = (event) => this.setState({ searchField: event.target.value });
}

export default App;
