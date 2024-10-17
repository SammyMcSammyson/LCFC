import '../css/HomePage.css';

export default async function StandingsPage() {
  const table = await fetch(
    'http://api.football-data.org/v4/competitions/PL/standings',
    {
      headers: { 'X-Auth-Token': '1eb66e115a0643c4b56923cbb19e3dd6' },
    }
  );
  const tableData = await table.json();

  return (
    <>
      <div className={`teletext-page`}>
        <header className='teletext-header'>
          <h1 className='title text-yellow'>Premier League Standings</h1>
        </header>
        <main className='teletext-content'>
          <section className='teletext-section'>
            <h2 className='section-title cyan'>Current Standings</h2>
            <table className='standings-table'>
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Team Name</th>
                  <th>Played Games</th>
                  <th>won</th>
                  <th>draw</th>
                  <th>lost</th>
                  <th>points</th>
                </tr>
              </thead>
              <tbody>
                {tableData.standings.map((standing) =>
                  standing.table.map((match, index) => (
                    <tr key={index}>
                      <td
                        className={
                          match.team.id == '338' ? 'leicester-team' : ''
                        }
                      >
                        {match.position}
                      </td>
                      <td
                        className={
                          match.team.id == '338' ? 'leicester-team' : ''
                        }
                      >
                        {match.team.name}
                      </td>
                      <td
                        className={
                          match.team.id == '338' ? 'leicester-team' : ''
                        }
                      >
                        {match.playedGames}
                      </td>
                      <td
                        className={
                          match.team.id == '338' ? 'leicester-team' : ''
                        }
                      >
                        {match.won}
                      </td>
                      <td
                        className={
                          match.team.id == '338' ? 'leicester-team' : ''
                        }
                      >
                        {match.draw}
                      </td>
                      <td
                        className={
                          match.team.id == '338' ? 'leicester-team' : ''
                        }
                      >
                        {match.lost}
                      </td>
                      <td
                        className={
                          match.team.id == '338' ? 'leicester-team' : ''
                        }
                      >
                        {match.points}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </section>
        </main>
        <footer className='teletext-footer text-white'>
          <p>© 2024 Sam Kohli</p>
        </footer>
      </div>
    </>
  );
}
