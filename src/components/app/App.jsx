import React from 'react';
import CharacterList from '../app/characters/CharacterList';
import Header from '../header/Header';
import styles from './App.css';
import { useSelectedTheme, useSetSelectedTheme } from '../state/CharacterProvider';


export default function App() {

  const selectedTheme = useSelectedTheme();

  return (


    <div className={
      selectedTheme === 'light' ?
        styles.light : styles.dark
    } >
      <Header />
      <CharacterList />
    </div >
  );
}
