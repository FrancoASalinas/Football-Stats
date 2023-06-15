import { useState } from 'react';
import { useRef } from 'react';
import Header from './modules/Header';
import Main from './modules/Main';
import './main.scss';

export default function App() {
  const [main, setMain] = useState(false);
  const [api, setApi] = useState(false);
  const mainRef = useRef(null);

  function handleCheck() {
    setApi((prev) => !prev);
  }

  function handleClick() {
    setMain(true);
    console.log(mainRef.current);
  }

  console.log(api);

  return (
    <>
      <Header onCheck={handleCheck} onClick={handleClick} />
      {main && <Main api={api} ref={mainRef} />}
    </>
  );
}
