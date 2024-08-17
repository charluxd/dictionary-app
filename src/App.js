import logo from './dictionary-app-logo.svg';
import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo img-fluid"
          alt="dictionary-logo"
        ></img>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        This project is coded by{' '}
        <a
          href="https://www.linkedin.com/in/charlottelhm/"
          target="_blank"
          rel="noreferrer"
        >
          Charlotte Lee
        </a>{' '}
        and it is open-sourced on{' '}
        <a
          href="https://github.com/charluxd/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{' '}
        and hosted on{' '}
        <a
          href="https://main--modern-dictionary-app.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
