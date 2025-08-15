
import { NextResponse } from 'next/server';
type ChatMsg={id:string;user:string;text:string;at:number}; const store:Record<string,ChatMsg[]>=(globalThis as any).__chatStore||{}; (globalThis as any).__chatStore=store;
export async function POST(req:Request){ const {room,text}=await req.json(); if(!room||!text) return NextResponse.json({ok:false},{status:400}); const arr=store[room]||(store[room]=[]);
  arr.push({id:Math.random().toString(36).slice(2),user:'me',text,at:Date.now()}); if(arr.length>200) arr.splice(0,arr.length-200); return NextResponse.json({ok:true}); }
