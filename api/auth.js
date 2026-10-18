import {verify} from './_auth.js';
export default async function handler(req,res){
  res.setHeader('Cache-Control','no-store');
  const email=await verify(req);
  if(!email){res.status(403).json({error:'not authorized'});return}
  res.status(200).json({email});
}
