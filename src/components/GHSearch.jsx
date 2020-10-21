import axios from "axios";
import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";

class GHSearch extends Component {
  state = {
    search: "",
    items: [],
  };

  async fetchNameRegister() {
    const results = await axios.get(
      `https://api.github.com/search/users?q=${this.state.search}`
    );
    this.setState({ items: results.data.items });
  }

  setSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    let nameRegister = this.state.items.map((item) => {
      return (
        <>
          <p>{item.login}</p>
        </>
      );
    });

    return (
      <>
        <Input
          onChange={(e) => this.setSearch(e)}
          type="text"
          name="search"
          placeholder="Input GH username"
          data-cy="input"
        />
        <Button onClick={this.fetchNameRegister.bind(this)} name="search">
          Search
        </Button>
        <h1 data-cy="search-result">{nameRegister}</h1>
      </>
    );
  }
}

export default GHSearch;
