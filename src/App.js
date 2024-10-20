import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello world！
        </p>
        <a
          className="App-link"
          href="http://cuishushu.cn"
          target="_blank"
          rel="noopener noreferrer"
        >
          cuishushu.cn
        </a>
      </header>
    </div>
  );
}

export default App;
