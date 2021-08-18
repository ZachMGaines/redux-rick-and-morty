import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { CharacterProvider } from '../src/components/state/CharacterProvider';

ReactDOM.render(
  <CharacterProvider>
    <App />
  </CharacterProvider>,
  document.getElementById('root')
);
