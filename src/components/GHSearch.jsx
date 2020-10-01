import { render } from '@testing-library/react';
import React, { Component }from 'react'
import { Button, Input } from 'semantic-ui-react'
import { fetchNameRegister } from '../modules/names'

class GHSearch extends Component {
  state = {
    names: [],
  };
  
  componentDidMount = async () => {
    const names = await fetchNameRegister();
    this.setState({ names: names})
  }

  render()
 {
    let nameRegister;
    if (this.state.products !== []) {
      nameRegister = this.state.names.map(() => {
        debugger
        return (
          <>
         
          </>
        )
      })
    }
 
    
  return (
    <>

     <Input id="input" type="text" name="search" placeholder="Input GH username"/>
      <Button name="search">Search</Button> 
    </>
  )
}
}


export default GHSearch
