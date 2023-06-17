import { useEffect } from 'react';
import { useState } from 'react';

export default function useFetch(api) {
  const [topScorers, setTopScorers] = useState([]);

  useEffect(() => {
    const url = api
      ? 'https://v3.football.api-sports.io/'
      : 'https://my.api.mockaroo.com/';
    const endpoint = {
      topScorers: api
        ? 'players/topscorers?season=2022&league=61'
        : 'top_scorers.json?key=5745e9a0',
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
        .then((response) => response.json())
        .catch((error) => console.log(error))
        .then((response) => setTopScorers(response.response));
    }

    function fetchSecondApi() {
      fetch(completeUrl)
        .then((response) => response.json())
        .catch((error) => console.log(error))
        .then((response) => setTopScorers(response))
        .then(() => topScorers);
    }

    api ? fetchFirstApi() : fetchSecondApi();
  }, []);
  return topScorers;
}
