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
  const [topScorers, setTopScorers] = useState([]);
  const url =
    'https://my.api.mockaroo.com/football_top_scoarers.json?key=5745e9a0';

  // const myHeaders = new Headers();
  // myHeaders.append('x-rapidapi-key', '1a3508246c26e132ec89913136f83975');
  // myHeaders.append('x-rapidapi-host', 'v3.football.api-sports.io');

  // const requestOptions = {
  //   method: 'GET',
  //   // headers: myHeaders,
  //   redirect: 'follow',
  // };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error))
      .then((response) => {
        return setTopScorers(response);
      });
  }, []);

  return (
    <main className="main">
      <h2 className="welcome"></h2>
      <Widget
        label={'Top Scorers'}
        topScorers={topScorers}
        tableColumns={[
          <span>name</span>,
          <img src="pngwing.com.png" width={'20px'} />,
          <span>team</span>,
        ]}
      />
    </main>
  );
}

function Widget({ label, topScorers, tableColumns }) {
  console.log(topScorers);
  return (
    <article className="widget">
      <table className="table">
        <caption>{label}</caption>
        <tr className="table-labels">
          {tableColumns.length > 0 &&
            tableColumns.map((item) => <th>{item}</th>)}
        </tr>
        {topScorers.map(
          (item, index) =>
            index < 5 && (
              <tr>
                <td>
                  {item.player_name.split(' ')[0][0] +
                    '. ' +
                    item.player_name.split(' ')[1]}
                </td>
                <td>{item.goals_scored}</td>
                <td>{item.team_name}</td>
              </tr>
            )
        )}
      </table>
    </article>
  );
}
