
'use client'; import { useRouter } from 'next/navigation'; import { useState } from 'react';
export default function Login(){ const r=useRouter(); const [email,setEmail]=useState(''); const [pw,setPw]=useState('');
const onSubmit=(e:React.FormEvent)=>{ e.preventDefault(); sessionStorage.setItem('lg-auth','ok'); r.push('/members'); };
return (<main style={{maxWidth:420,margin:'10vh auto',padding:16}}>
  <h1 style={{marginBottom:12}}>Sign in</h1>
  <form onSubmit={onSubmit} style={{display:'grid',gap:12}}>
    <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
    <input placeholder="Password" type="password" value={pw} onChange={e=>setPw(e.target.value)} />
    <button type="submit">Continue</button>
  </form>
</main>); }
