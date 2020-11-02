import './App.css';
import ToDos from './ToDos';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Container className="mt-5">
        <ToDos />
      </Container>
    </div>
  );
}

export default App;
