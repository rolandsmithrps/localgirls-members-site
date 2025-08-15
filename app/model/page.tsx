
'use client'; import { useEffect } from 'react';
export default function ModelPortal(){ useEffect(()=>{
  const slug=process.env.NEXT_PUBLIC_MODEL_SLUG||process.env.MODEL_SLUG||'Taylored2U'; let stop=false;
  async function beat(){ try{ await fetch('/api/presence/ping',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({slug})}); }catch{} if(!stop) setTimeout(beat,10000); }
  beat(); return ()=>{ stop=true; };
},[]);
const goLive=async()=>{ const r=await fetch('/api/token/model',{method:'POST'}); const {token,room}=await r.json();
  const sub=process.env.NEXT_PUBLIC_DAILY_SUBDOMAIN||'localgirls'; const url=`https://${sub}.daily.co/${room}?t=${token}`; window.open(url,'_blank','noopener,noreferrer'); };
return (<main style={{maxWidth:700,margin:'10vh auto',padding:16}}><h1>Model Portal</h1><p>Click Go live and keep this tab open so members can see you online.</p><button onClick={goLive} style={{padding:'10px 14px'}}>Go live</button></main>); }
