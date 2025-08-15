
import { NextResponse } from 'next/server';
type Beat={slug:string;last:number}; const store:Record<string,Beat>=(globalThis as any).__lgBeats||{}; (globalThis as any).__lgBeats=store;
export async function POST(req:Request){ const {slug}=await req.json(); if(!slug) return NextResponse.json({ok:false},{status:400}); store[slug]={slug,last:Date.now()}; return NextResponse.json({ok:true}); }
