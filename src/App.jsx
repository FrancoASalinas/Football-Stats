import { useState, useRef, createContext } from 'react';

import Header from './modules/Header';
import Main from './modules/Main';
import './main.scss';

export const ApiContext = createContext();

export default function App() {
  const [main, setMain] = useState(false);
  const [api, setApi] = useState(false);

  const mainRef = useRef(null);

  function handleCheck() {
    setApi((prev) => !prev);
  }

  function handleClick() {
    setMain(true);
  }

  return (
    <>
      <ApiContext.Provider value={api}>
        <Header onCheck={handleCheck} onClick={handleClick} />
        {main && <Main ref={mainRef} api={api} />}
      </ApiContext.Provider>
    </>
  );
}
