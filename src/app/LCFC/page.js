import Link from 'next/link';
import "../css/LCFC.css"

export default async function LCFCPage() {
  const result = await fetch(
    'https://api.football-data.org/v4/teams/338/matches',
    {
      headers: { 'X-Auth-Token': '1eb66e115a0643c4b56923cbb19e3dd6' },
    }
  );

  const data = await result.json();
  const classNames = ['text-white', 'text-magenta', 'text-green '];
  return (
    <>
      <div className={`teletext-page`}>
        <header className='teletext-header'>
          <h1 className='title text-yellow'>Leicester City Fixture List</h1>
        </header>
        <main className='teletext-content'>
          <section className='teletext-section'>
            <h2 className='section-title cyan'>Fixtures</h2>
            <ul className='fixture-list'>
              {data.matches.map((match, index) => (
                <div key={match.id}>
                  <Link href={`/LCFC/${match.id}`}>
                    <li
                      className={`results-item ${
                        classNames[index % classNames.length]
                      }`}
                    >
                      {match.homeTeam.name} vs {match.awayTeam.name}
                    </li>
                    <li
                      className={`results-item ${
                        classNames[index % classNames.length]
                      }`}
                    >
                      {match.score.fullTime.home !== null
                        ? `${match.score.fullTime.home} vs ${match.score.fullTime.away}`
                        : 'Not been played yet'}
                    </li>
                  </Link>
                </div>
              ))}
            </ul>
          </section>
        </main>

        <footer className='teletext-footer text-white'>
          <p>© 2024 Sam Kohli</p>
        </footer>
      </div>
    </>
  );
}
