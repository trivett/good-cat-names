import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import { ROUTES } from './routes';

class App extends Component {
  constructor() {
    super()
    this.state = {}
    this.getCatNames = this.getCatNames.bind(this)
  }
  componentDidMount() {
    this.getCatNames();
  }

  fetch(endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(error => reject(error));
    });
  }

  getCatNames() {
    this.fetch(ROUTES.catNamesIndex)
      .then(cat_names => {
        this.setState({ cat_names: cat_names });
      });
  }

  render() {
    let { cat_names } = this.state;
    console.log(cat_names);
    return cat_names ?
      <Container>
        <Header>The following cat names are great:</Header>
        <ul>
          {cat_names.map((catName, i) => {
            return <li key={i}>{catName.name}</li>;
          })}
        </ul>
      </Container>
      :
      <div>
        <h1>Your cat name suggestions are loading...</h1>
      </div>
      ;
  }
}
export default App;