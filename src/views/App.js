import logo from './logo.svg';
import './App.scss';
import Product from './Product';
import 'react-image-lightbox/style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Product/>
      </header>
    </div>
  );
}

export default App;