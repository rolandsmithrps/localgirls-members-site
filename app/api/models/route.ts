
import { NextResponse } from 'next/server';
type Model={slug:string;name:string;coverUrl:string;online:boolean};
const modelsBase:Model[]=[{slug:process.env.MODEL_SLUG||'Taylored2U',name:'Taylored2U',coverUrl:'/taylored2u.png',online:false}];
type Beat={slug:string;last:number}; const beats:Record<string,Beat>=(globalThis as any).__lgBeats||{};
export async function GET(){ const now=Date.now(); const models=modelsBase.map(m=>({...m,online:!!(beats[m.slug]&&(now-beats[m.slug].last)<20000)})); return NextResponse.json(models); }
