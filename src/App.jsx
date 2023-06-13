import { useState } from 'react';
import { useEffect } from 'react';
import Header from './modules/Header';
import './main.scss';

export default function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

function Main() {
  const [data, setData] = useState([]);
  const url = 'https://v3.football.api-sports.io/leagues';

  const myHeaders = new Headers();
  myHeaders.append('x-rapidapi-key', '1a3508246c26e132ec89913136f83975');
  myHeaders.append('x-rapidapi-host', 'v3.football.api-sports.io');

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  useEffect(() => {
    fetch(url, requestOptions)
      .then((response) => response.json())
      .catch((error) => console.log(error))
      .then((response) => {
        setData(response);
        console.log(data);
      });
  });

  return (
    <main className="main">
      <h2 className="welome"></h2>
      <button className="button"></button>
      <div>{data.length > 0}</div>
    </main>
  );
}
