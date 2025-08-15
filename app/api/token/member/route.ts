
import { NextResponse } from 'next/server'; import { dailyFetch } from '../../_lib/daily';
export async function POST(req:Request){ const { room } = await req.json();
  const d=await dailyFetch(`/meeting-tokens`,{method:'POST',body:JSON.stringify({properties:{room_name:room,is_owner:false,user_name:'Member',eject_at_token_exp:true}})});
  return NextResponse.json({ token:d.token }); }
