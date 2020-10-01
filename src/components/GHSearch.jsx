
import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";
import { fetchNameRegister } from "../modules/names";

class GHSearch extends Component {
  state = {
    items: [],
  };

  componentDidMount = async () => {
    const items = await fetchNameRegister();
    this.setState({ items: items });
  };

  render() {
    let nameRegister;
    if (this.state.items !== []) {
      nameRegister = this.state.items.map((item) => {
        return (
        
        <>
     <p>{item.login}</p>
        </>
      );
    })

  }
    return (
      <>
        <Input
          id="input"
          type="text"
          name="search"
          placeholder="Input GH username"
        />
        <Button name="search">Search</Button>
        {nameRegister}
      </>
    );
  }
}

export default GHSearch;
