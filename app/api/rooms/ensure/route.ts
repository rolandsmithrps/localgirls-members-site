
import { NextResponse } from 'next/server'; import { dailyFetch } from '../../_lib/daily';
export async function POST(){ const room=process.env.MODEL_SLUG||'Taylored2U';
  try{ await dailyFetch(`/rooms/${room}`,{method:'GET'}); }catch{
    await dailyFetch(`/rooms`,{method:'POST',body:JSON.stringify({name:room,privacy:'private',properties:{owner_only_broadcast:true,enable_knocking:false,audio_mode:'standard'}})});
  }
  return NextResponse.json({ok:true,room}); }
