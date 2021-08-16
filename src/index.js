
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { CharacterProvider } from './state/CharacterProvider';

ReactDOM.render(
  <CharacterProvider>
    <App />
  </CharacterProvider>,
  document.getElementById('root')
);
