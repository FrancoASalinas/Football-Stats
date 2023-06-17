import Widget from './Widget';
import { forwardRef, useState, useEffect, useContext } from 'react';
import useFetch from '../utils/fetch.js';
import { ApiContext } from '../App';

const Main = forwardRef((props, ref) => {
  const api = useContext(ApiContext);
  const topScorers = useFetch(api);
  const [openDiag, setOpendiag] = useState(0);

  console.log(openDiag);

  useEffect(() => {
    ref.current.scrollIntoView(true);
  });

  function handleClick(e) {
    return;
  }

  return (
    <main className="main" ref={ref}>
      <Nav open={openDiag} onClick={handleClick} />
      <h2>Football Stats</h2>
      <Widget
        label={'Top Scorers'}
        topScorers={topScorers}
        tableHeaders={[
          <span>name</span>,
          <img src="pngwing.com.png" width={'20px'} />,
          <span>team</span>,
        ]}
        api={api}
      />
    </main>
  );
});

function Nav({ open, onClick }) {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <li className="nav__links__link">
          <a href="#" value="caca" onClick={() => onClick}>
            Stats
          </a>
        </li>
        <li className="nav__links__link">
          <a href="#">About</a>
        </li>
      </ul>
      <dialog open={open} className="nav__dialog">
        <ul className="nav__dialog__ul">
          <li>
            <a>Teams</a>
          </li>
          <li>
            <a>Players</a>
          </li>
          <li>
            <a>Leagues</a>
          </li>
        </ul>
      </dialog>
    </nav>
  );
}

export default Main;
