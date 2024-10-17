import '../app/css/HomePage.css';
import Link from 'next/link';

export default async function HomePage() {
  const topScorers = [
    { name: 'Jamie Vardy', played: 7, goals: 2 },
    { name: 'James Justin', played: 7, goals: 2 },
    { name: 'Stephy Mavididi', played: 7, goals: 2 },
  ];

  const classNames = ['text-white', 'text-magenta', 'text-green '];

  const result = await fetch(
    'https://api.football-data.org/v4/teams/338/matches',
    {
      headers: { 'X-Auth-Token': '1eb66e115a0643c4b56923cbb19e3dd6' },
    }
  );
  const data = await result.json();

  return (
    <>
      <div className={`teletext-page`}>
        <header className='teletext-header'>
          <h1 className='title text-yellow'>Welcome to LCFC Teletext</h1>
          <p className='header-two text-cyan'>
            Latest Leicester City Football Club News
          </p>
        </header>
        <main className='teletext-content'>
          <section className='teletext-section'>
            <h2 className='section-title cyan'>Latest Match Results</h2>
            <ul className='results-list'>
              {data.matches
                .filter((match) => match.score.fullTime.home !== null)
                .sort((a, b) => new Date(b.utcDate) - new Date(a.utcDate))
                .slice(0, 3)
                .map((match, index) => (
                  <div key={match.id}>
                    <Link href={`/LCFC/${match.id}`}>
                      <li className={`results-item ${classNames[index]}`}>
                        {match.homeTeam.name} vs {match.awayTeam.name}
                      </li>
                      <li className={`results-item ${classNames[index]}`}>
                        {match.score.fullTime.home} vs{' '}
                        {match.score.fullTime.away}
                      </li>
                    </Link>
                  </div>
                ))}
            </ul>
          </section>

          <section className='teletext-section'>
            <h2 className='section-title cyan'>Upcoming Fixtures</h2>
            <ul className='fixtures-list'>
              {data.matches
                .filter((match) => match.score.fullTime.home === null)
                .sort((a, b) => new Date(a.utcDate) - new Date(b.utcDate))
                .slice(0, 3)
                .map((match, index) => {
                  const utcDate = new Date(match.utcDate);
                  const gmtDate = utcDate.toLocaleString('en-GB', {
                    timeZone: 'Europe/London',
                    hour12: true,
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                  });

                  return (
                    <div key={match.id}>
                      <Link href={`/LCFC/${match.id}`}>
                        <li className={`results-item ${classNames[index]}`}>
                          {match.homeTeam.name} vs {match.awayTeam.name}
                        </li>
                        <li className={`results-item ${classNames[index]}`}>
                          {' '}
                          {gmtDate}
                        </li>
                      </Link>
                    </div>
                  );
                })}
            </ul>
          </section>

          <section className='teletext-section'>
            <table className='scorers-table'>
              <thead>
                <tr>
                  <th className='section-LCFC-title cyan'>Top Scorers</th>
                  <th className='ths'>P</th>
                  <th className='ths'>G</th>
                </tr>
              </thead>
              <tbody>
                {topScorers.map((player, index) => (
                <tr key={index}>
                <td className={`results-item ${classNames[index]}`}>{player.name}</td>
                <td className={`results-item ${classNames[index]}`}>{player.played}</td>
                <td className={`results-item ${classNames[index]}`}>{player.goals}</td>
              </tr>
                ))}
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

export const metadata = {
  title: 'Football Friends ',
  description: 'A simple site to to get information about LCFC',
};
