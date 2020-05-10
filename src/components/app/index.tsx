import React from 'react';
import logo from '../../assets/logo.svg';
import styles from './styles.module.scss';

const App = () => {
  return (
    <div className={`${styles.app}`}>
      <header className={`${styles.appHeader}`}>
        <img
          src={logo}
          className={`${styles.appLogo}`}
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={`${styles.appLink}`}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div >
  );
}

export default App;