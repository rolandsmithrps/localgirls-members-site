
'use client'; import { useEffect, useState } from 'react';
type Model = { slug:string; name:string; coverUrl:string; online:boolean };
function useAuthGate(){ useEffect(()=>{ if(typeof window!=='undefined'){ if(sessionStorage.getItem('lg-auth')!=='ok') window.location.href='/login'; } },[]); }
export default function Members(){ useAuthGate(); const [models,setModels]=useState<Model[]>([]);
const refresh=async()=>{ const r=await fetch('/api/models',{cache:'no-store'}); const d:Model[]=await r.json();
  setModels([...d].sort((a,b)=> a.slug==='Taylored2U' ? -1 : b.slug==='Taylored2U' ? 1 : 0)); };
useEffect(()=>{ refresh(); const i=setInterval(refresh,5000); return ()=>clearInterval(i); },[]);
return (<div className="scaffold"><aside className="sidebar"><h3>Browse</h3><ul className="menu"><li className="active">All Girls</li><li>New</li><li>Favorites</li></ul><h3>Categories</h3><ul className="menu"><li>Category</li><li>Category</li><li>Category</li></ul></aside>
<main className="content"><h2 style={{margin:'0 0 12px'}}>Welcome back</h2><div className="grid">{models.map(m=>(
  <a key={m.slug} href={`/room/${m.slug}`} className="tile">
    <img src={m.coverUrl} alt={m.name} /><div className="badge"><span className="dot" style={{background:m.online?'#22c55e':'#9ca3af'}}></span><span>{m.name} · {m.online?'Online':'Offline'}</span></div>
  </a>))}</div></main></div>); }
