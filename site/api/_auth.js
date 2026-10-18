export async function verify(req){
  const h=req.headers.authorization||'';const t=h.startsWith('Bearer ')?h.slice(7):'';
  if(!t||!process.env.GOOGLE_CLIENT_ID)return null;
  const r=await fetch('https://oauth2.googleapis.com/tokeninfo?id_token='+encodeURIComponent(t));
  if(!r.ok)return null;
  const p=await r.json();
  const admins=(process.env.ADMIN_EMAILS||'uri@mazorfirst.com').toLowerCase().split(',').map(s=>s.trim()).filter(Boolean);
  if(p.aud!==process.env.GOOGLE_CLIENT_ID)return null;
  if(!(p.email_verified===true||p.email_verified==='true'))return null;
  const email=String(p.email||'').toLowerCase();
  return admins.includes(email)?email:null;
}
