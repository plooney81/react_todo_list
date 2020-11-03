import './App.css';
import React, {Component} from 'react';
import ToDos from './ToDos';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      something: ''
    }
  }
  render() {
    return (
      <div className="App">
        <Container className="mt-5">
          <ToDos />
        </Container>
      </div>
    );
  }
}

export default App;
