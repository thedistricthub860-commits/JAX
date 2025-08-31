export const metadata={title:'CareerCraft AI (Demo)',description:'Generate tailored resumes & cover letters with AI — free demo (5 runs).'};
export default function RootLayout({children}:{children:React.ReactNode}){
  return(<html lang='en'><body style={{fontFamily:'Inter,system-ui,sans-serif',background:'#0b0b0b',color:'white'}}>
    <div style={{maxWidth:880,margin:'0 auto',padding:24}}>{children}</div>
  </body></html>);
}