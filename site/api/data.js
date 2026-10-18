import {put,list} from '@vercel/blob';
import {verify} from './_auth.js';
export default async function handler(req,res){
  res.setHeader('Cache-Control','no-store');
  try{
    if(req.method==='GET'){
      const {blobs}=await list({prefix:'data.json',limit:5});
      const b=blobs.find(x=>x.pathname==='data.json');
      if(!b){res.status(204).end();return}
      const r=await fetch(b.url+'?t='+Date.parse(b.uploadedAt),{cache:'no-store'});
      res.setHeader('Content-Type','application/json; charset=utf-8');
      res.status(200).send(await r.text());return;
    }
    if(req.method==='POST'){
      const email=await verify(req);
      if(!email){res.status(403).json({error:'not authorized'});return}
      const body=typeof req.body==='string'?JSON.parse(req.body):req.body;
      if(!body||!Array.isArray(body.points)||!Array.isArray(body.days)){res.status(400).json({error:'bad data'});return}
      body.savedBy=email;body.savedAt=new Date().toISOString();
      const s=JSON.stringify(body);
      await put('data.json',s,{access:'public',addRandomSuffix:false,allowOverwrite:true,contentType:'application/json',cacheControlMaxAge:60});
      await put('backups/'+body.savedAt.replace(/[:.]/g,'-')+'.json',s,{access:'public',addRandomSuffix:false,contentType:'application/json'});
      res.status(200).json({ok:true,savedAt:body.savedAt});return;
    }
    res.status(405).end();
  }catch(e){res.status(500).json({error:String(e&&e.message||e)})}
}
