import Link from 'next/link';

export default function NavBar() {
  return (
    <>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/LCFC'> Fixtures</Link>
        <Link href='/standings'> Table</Link>
      </nav>
    </>
  );
}
