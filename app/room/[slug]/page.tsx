
'use client'; import { useEffect, useMemo, useRef, useState } from 'react';
type ChatMsg={id:string;user:string;text:string;at:number};
export default function RoomPage({ params }:{ params:{ slug:string } }){
  const slug=params.slug; const [token,setToken]=useState<string|null>(null); const [messages,setMessages]=useState<ChatMsg[]>([]); const [text,setText]=useState(''); const listRef=useRef<HTMLDivElement>(null);
  useEffect(()=>{ (async()=>{ const r=await fetch('/api/token/member',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({room:slug})}); const d=await r.json(); setToken(d.token); })(); },[slug]);
  const roomUrl=useMemo(()=>{ if(!token) return ''; const sub=process.env.NEXT_PUBLIC_DAILY_SUBDOMAIN||'localgirls'; return `https://${sub}.daily.co/${slug}?t=${token}`; },[token,slug]);
  const send=async()=>{ if(!text.trim()) return; await fetch('/api/chat/send',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({room:slug,text})}); setText(''); await load(); };
  const load=async()=>{ const r=await fetch(`/api/chat/list?room=${encodeURIComponent(slug)}`,{cache:'no-store'}); const d:ChatMsg[]=await r.json(); setMessages(d); setTimeout(()=>{ if(listRef.current) listRef.current.scrollTop=listRef.current.scrollHeight; },50); };
  useEffect(()=>{ load(); const i=setInterval(load,1500); return ()=>clearInterval(i); },[slug]);
  return (<main style={{padding:12}}>
    <div style={{display:'grid',gridTemplateColumns:'3fr 1fr',gap:12,minHeight:'62vh'}}>
      <div style={{background:'#0b0b0c',border:'1px solid #383843',borderRadius:12,overflow:'hidden',position:'relative'}}>
        {roomUrl? <iframe src={roomUrl} allow="camera; microphone; autoplay; display-capture; clipboard-read; clipboard-write" style={{width:'100%',height:'100%',border:0}}/> : <div style={{display:'grid',placeItems:'center',color:'#9ca3af',height:'100%'}}>Loading video…</div>}
        <div style={{position:'absolute',left:8,bottom:8,right:8,display:'flex',gap:8,alignItems:'center'}}>
          <button className="close-btn">⛭</button><button className="close-btn">🎤</button><button className="close-btn">🎥</button><div style={{flex:1}}/>
          <button className="close-btn" style={{background:'#1d4ed8'}}>Give Tip</button><button className="close-btn" style={{background:'#7c3aed'}}>Enter Private Room</button>
        </div>
      </div>
      <aside style={{display:'grid',gridTemplateRows:'auto 1fr auto',border:'1px solid #383843',borderRadius:12,overflow:'hidden'}}>
        <div className="modal-header"><div style={{fontWeight:600}}>{slug}</div><div style={{fontSize:12,opacity:.75}}>Welcome to the room</div></div>
        <div className="chat-list" ref={listRef}>
          {messages.map(m=>(<div key={m.id} className="chat-item"><strong className={m.user==='me'?'me':''}>{m.user}</strong>: {m.text}</div>))}
        </div>
        <form className="chat-form" onSubmit={(e)=>{e.preventDefault();send();}}>
          <input value={text} onChange={e=>setText(e.target.value)} placeholder="Type a message..." /><button type="submit">Send</button>
        </form>
      </aside>
    </div>
    <div style={{marginTop:12,background:'#24172a',border:'1px solid #383843',borderRadius:12,padding:12}}>
      <div style={{display:'grid',gridTemplateColumns:'80px 1fr 1fr',gap:12,alignItems:'center'}}>
        <div style={{width:64,height:64,borderRadius:'50%',background:'#999',display:'grid',placeItems:'center'}}>Profile Pic</div>
        <div><div style={{fontWeight:600}}>Taylored2U</div><div style={{fontSize:12,opacity:.8}}>United States | 26 | ★★★★★</div><div style={{fontSize:12,opacity:.8}}>Last Performance • just now</div></div>
        <div style={{display:'flex',gap:8,justifyContent:'flex-end'}}><button className="close-btn">Private Message Me</button><button className="close-btn">Get Notifications</button></div>
      </div>
    </div>
    <div style={{display:'grid',gridTemplateColumns:'1fr 320px',gap:12,marginTop:12}}>
      <section style={{background:'#0f0f10',border:'1px solid #383843',borderRadius:12,padding:12}}>
        <h3 style={{marginTop:0}}>About Me</h3><p style={{opacity:.9,lineHeight:1.6}}>Hey loves! I’m Taylor. Stream here a few nights a week.</p>
        <h3>My Photos</h3><div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:8}}>{Array.from({length:10}).map((_,i)=>(<div key={i} style={{background:'#37d1d7',height:80,borderRadius:6}}/>))}</div>
      </section>
      <aside style={{display:'grid',gap:12}}><div style={{background:'#0f0f10',border:'1px solid #383843',borderRadius:12,padding:12}}>
        <h3 style={{marginTop:0}}>Member Reviews</h3><div style={{display:'grid',gap:8}}>{Array.from({length:4}).map((_,i)=>(
          <div key={i} style={{background:'#141416',border:'1px solid #2f2f33',borderRadius:8,padding:8,fontSize:14}}><div style={{fontWeight:600,marginBottom:4}}>★★★★★ Amazing</div>Super sweet, great energy!</div>
        ))}</div></div></aside>
    </div>
  </main>); }
