
import { NextResponse } from 'next/server';
type ChatMsg={id:string;user:string;text:string;at:number}; const store:Record<string,ChatMsg[]>=(globalThis as any).__chatStore||{};
export async function GET(req:Request){ const {searchParams}=new URL(req.url); const room=searchParams.get('room')||''; const arr=store[room]||[]; return NextResponse.json(arr); }
