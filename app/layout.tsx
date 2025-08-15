
import './globals.css'; import Link from 'next/link';
export const metadata = { title:'Local Girls', description:'Member Portal' };
export default function RootLayout({ children }:{ children: React.ReactNode }){
  return (<html lang="en"><body>
    <header className="header">
      <div className="brand">LOCAL GIRLS</div>
      <nav style={{display:'flex',gap:12}}>
        <Link href="/login">Member Login</Link>
        <Link href="/members">Members</Link>
        <Link href="/model">Model Portal</Link>
      </nav>
    </header>{children}
  </body></html>);
}
