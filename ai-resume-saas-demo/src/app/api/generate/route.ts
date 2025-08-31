import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export const runtime = 'edge';

export async function POST(req: Request){
  try{
    const body = await req.json();
    const job = String(body?.job||'');
    const bio = String(body?.bio||'');
    const key = process.env.OPENAI_API_KEY;
    if(!key) return NextResponse.json({error:'OPENAI_API_KEY missing'}, {status:500});

    const prompt = `You are a senior career coach + technical recruiter.
Given the JOB POSTING and the CANDIDATE BIO, write:
1) A **bullet-point resume section** tailored to the role (5-8 bullets, quantified impact when possible).
2) A **cover letter** (150-220 words), concise and confident.
Use strong verbs, ATS keywords, and quantify achievements.
JOB POSTING:\n${job}\n\nCANDIDATE BIO:\n${bio}`;

    const client = new OpenAI({ apiKey: key });
    const resp = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You write elite, succinct job materials that get interviews.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.4
    });

    const text = resp.choices?.[0]?.message?.content || '';
    return NextResponse.json({ text });
  }catch(e:any){
    return NextResponse.json({error: e?.message || 'Server error'}, {status: 500});
  }
}
