'use client';
import {useEffect, useState} from 'react';

function getCount(): number {
  try{ return Number(localStorage.getItem('demoCount')||'0'); }catch{ return 0; }
}
function incCount(){ try{ localStorage.setItem('demoCount', String(getCount()+1)); }catch{} }

export default function Generator(){
  const [job,setJob]=useState('');
  const [bio,setBio]=useState('');
  const [out,setOut]=useState<string|null>(null);
  const [loading,setLoading]=useState(false);
  const [count,setCount]=useState(0);

  useEffect(()=>{ setCount(getCount()); },[]);
  const limit=5;
  const canUse = count < limit;

  const run=async()=>{
    if(!canUse) return;
    setLoading(true); setOut(null);
    const res=await fetch('/api/generate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({job,bio})});
    const data=await res.json();
    setOut(data?.text??'No output');
    setLoading(false);
    incCount(); setCount(getCount());
  };

  return(<main>
    <h1 style={{fontSize:28,fontWeight:900,marginBottom:12}}>Resume & Cover Letter (Demo)</h1>
    <p style={{opacity:0.8,marginBottom:8}}>You have <b>{Math.max(0,limit-count)}</b> free generations left.</p>
    <div style={{display:'grid',gap:12}}>
      <label>
        <div style={{fontWeight:700,marginBottom:6}}>Job description / posting</div>
        <textarea value={job} onChange={e=>setJob(e.target.value)} rows={6} style={{width:'100%',padding:12,borderRadius:12,border:'1px solid #333',background:'#111',color:'white'}}/>
      </label>
      <label>
        <div style={{fontWeight:700,marginBottom:6}}>Your background / resume</div>
        <textarea value={bio} onChange={e=>setBio(e.target.value)} rows={6} style={{width:'100%',padding:12,borderRadius:12,border:'1px solid #333',background:'#111',color:'white'}}/>
      </label>
      <button onClick={run} disabled={loading || !canUse} style={{padding:'12px 16px',borderRadius:12,background: canUse ? '#38bdf8' : '#525252',color:'black',fontWeight:900}}>
        {canUse ? (loading?'Generating…':'Generate') : 'Limit reached — Upgrade soon'}
      </button>
      {out&&(<div style={{whiteSpace:'pre-wrap',padding:16,border:'1px solid #333',borderRadius:12,background:'#0f172a'}}>{out}</div>)}
    </div>
  </main>);
}