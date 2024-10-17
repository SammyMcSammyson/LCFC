import Link from 'next/link';

export default async function IdPage({ params }) {
  const { id } = params;

  const result = await fetch(
    'https://api.football-data.org/v4/teams/338/matches',
    {
      headers: { 'X-Auth-Token': '1eb66e115a0643c4b56923cbb19e3dd6' },
    }
  );

  const data = await result.json();

  const match = data.matches.find((match) => match.id.toString() === id);

  return (
    <div className={`teletext-page`}>
      <header className='teletext-header'>
        <h1 className='title text-yellow'>
          Match Details for {match.homeTeam.tla} vs {match.awayTeam.tla}
        </h1>
      </header>
      <main className='teletext-content'>
        <section className='teletext-section'>
          <h2 className='section-title cyan'>Match Information</h2>
          <p>
            <strong>Half Time Score:</strong>{' '}
            {match.score.halfTime.home !== null
              ? `${match.score.halfTime.home} vs ${match.score.halfTime.away}`
              : `Not been played yet`}
          </p>
          <p>
            <strong>Full Time Score:</strong>{' '}
            {match.score.fullTime.home !== null
              ? `${match.score.fullTime.home} vs ${match.score.fullTime.away}`
              : `Not been played yet`}
          </p>
          <p>
            <strong>Referee:</strong>{' '}
            {match.referees.length > 0 ? `${match.referees[0].name}` : `N/A`}
          </p>
        </section>
      </main>
      <footer className='teletext-footer text-white'>
        <Link href={`/LCFC`}>Go back</Link>
      </footer>
    </div>
  );
}
