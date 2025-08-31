import Link from 'next/link';
export default function Page(){
  return(<main>
    <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',margin:'16px 0'}}>
      <h1 style={{fontSize:28,fontWeight:800}}>CareerCraft AI — Demo</h1>
      <Link href='/app' style={{padding:'10px 16px',borderRadius:12,background:'white',color:'black',fontWeight:700}}>Try Free Demo</Link>
    </header>
    <section style={{marginTop:32}}>
      <h2 style={{fontSize:44,lineHeight:1.1,fontWeight:900,marginBottom:12}}>Land interviews faster.</h2>
      <p style={{fontSize:18,opacity:0.85}}>Paste a job post and your background. Get a tailored resume section + cover letter in seconds.</p>
      <ul style={{marginTop:16,opacity:0.9,lineHeight:1.7}}>
        <li>ATS-aware keywords + quantified bullet points</li>
        <li>Role-specific structure (IC vs. Manager)</li>
        <li>5 free generations — then upgrade (coming soon)</li>
      </ul>
      <div style={{marginTop:24}}>
        <Link href='/app' style={{padding:'14px 20px',borderRadius:14,background:'#38bdf8',color:'black',fontWeight:800}}>Start Free Demo →</Link>
      </div>
    </section>
  </main>);
}