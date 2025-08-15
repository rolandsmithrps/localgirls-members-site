
export const DAILY_API='https://api.daily.co/v1';
export async function dailyFetch(path:string, opts:RequestInit={}){
  const key=process.env.DAILY_API_KEY!;
  const res=await fetch(`${DAILY_API}${path}`,{...opts,headers:{'Authorization':`Bearer ${key}`,'Content-Type':'application/json',...(opts.headers||{})}});
  if(!res.ok){ const t=await res.text(); throw new Error(`${res.status} ${t}`); }
  return res.json();
}
