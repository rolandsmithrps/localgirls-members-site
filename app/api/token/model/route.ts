
import { NextResponse } from 'next/server'; import { dailyFetch } from '../../_lib/daily';
export async function POST(){ const room=process.env.MODEL_SLUG||'Taylored2U'; try{ await fetch(`/api/rooms/ensure`,{method:'POST'});}catch{}
  const d=await dailyFetch(`/meeting-tokens`,{method:'POST',body:JSON.stringify({properties:{room_name:room,is_owner:true,user_name:room}})});
  return NextResponse.json({ token:d.token, room }); }
