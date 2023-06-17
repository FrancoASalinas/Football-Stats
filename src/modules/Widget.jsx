export default function Widget({ label, topScorers, tableHeaders, api }) {
  return (
    <article className="widget">
      <table className="table">
        <caption>{label}</caption>
        <TableHeaders tableHeaders={tableHeaders} />
        {api ? (
          <TableItemsAPI topScorers={topScorers} itemsNumber={5} />
        ) : (
          <TableItemsMock topScorers={topScorers} itemsNumber={5} />
        )}
      </table>
    </article>
  );
}

function TableHeaders({ tableHeaders }) {
  return (
    <tr className="table-headers">
      {tableHeaders.map((item) => (
        <th>{item}</th>
      ))}
    </tr>
  );
}

function TableItemsMock({ topScorers, itemsNumber }) {
  console.log(topScorers);
  return (
    topScorers.length > 0 &&
    topScorers.map(
      (item, index) =>
        index < itemsNumber && (
          <tr>
            <td>{item.player.name}</td>
            <td>{item.statistics.goals}</td>
            <td>{item.statistics.team.name}</td>
          </tr>
        )
    )
  );
}

function TableItemsAPI({ topScorers, itemsNumber }) {
  console.log(topScorers);
  return (
    topScorers.length > 0 &&
    topScorers.map(
      (item, index) =>
        index < itemsNumber && (
          <tr>
            <td>{item.player.name}</td>
            <td>{item.statistics[0].goals.total}</td>
            <td>{item.statistics[0].team.name}</td>
          </tr>
        )
    )
  );
}
