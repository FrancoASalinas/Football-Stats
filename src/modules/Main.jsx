import Widget from './Widget';
import { forwardRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Main = forwardRef(({ api }, ref) => {
  const [topScorers, setTopScorers] = useState([]);

  const url = api
    ? 'https://v3.football.api-sports.io/'
    : 'https://my.api.mockaroo.com/';
  const endpoint = {
    topScorers: api ? 'players/topscorers?season=2022&league=61' : 'topmock',
  };

  const completeUrl = url + endpoint.topScorers;

  const myHeaders = new Headers();
  myHeaders.append('x-rapidapi-key', '1a3508246c26e132ec89913136f83975');
  myHeaders.append('x-rapidapi-host', 'v3.football.api-sports.io');

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  function fetchFirstApi() {
    fetch(completeUrl, requestOptions)
      .then((response) => {
        if (!response.ok) {
          console.error('an error ocurred, fetching from 2nd API');
          fetchSecondApi();
        } else return response.json();
      })
      .catch((error) => console.log(error))
      .then((response) => setTopScorers(response.response));
  }

  function fetchSecondApi() {
    fetch(completeUrl)
      .then((response) => response.json())
      .catch((error) => console.log(error))
      .then((response) => setTopScorers(response.response));
  }

  useEffect(() => {
    ref.current.scrollIntoView(true);

    if (api) {
      fetchFirstApi();
    } else {
      fetchSecondApi();
    }
  }, [setTopScorers]);

  return (
    <main className="main" ref={ref}>
      <h2 className="welcome"></h2>
      <Widget
        label={'Top Scorers'}
        topScorers={topScorers}
        tableHeaders={[
          <span>name</span>,
          <img src="pngwing.com.png" width={'20px'} />,
          <span>team</span>,
        ]}
      />
    </main>
  );
});

export default Main;
