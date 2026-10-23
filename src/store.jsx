import {createContext,useContext,useState} from 'react';import {MENU,STATIONS} from './data.js';
const Ctx=createContext();export const useApp=()=>useContext(Ctx);
const ago=m=>Date.now()-m*60000;
const SEED=[
{id:'s1',order:'A102',table:'Table 2',st:0,src:'Waiter',items:[{n:'Sourdough Tartine',q:1}],status:'PREPARING',ts:ago(14)},
{id:'s2',order:'A101',table:'Swiggy #842',st:0,src:'Swiggy',items:[{n:'Butter Croissant',q:2}],status:'PREPARING',ts:ago(18)},
{id:'s3',order:'A098',table:'Table 5',st:2,src:'QR',items:[{n:'Iced Matcha Latte',q:2}],status:'READY',ts:ago(4)},
{id:'s4',order:'A096',table:'Table 8',st:0,src:'Waiter',items:[{n:'Butter Croissant',q:1}],status:'READY',ts:ago(6)},
{id:'s5',order:'A106',table:'Table 7',st:0,src:'Waiter',items:[{n:'Seeded Rye',q:1,note:'Standard slice'}],status:'QUEUED',ts:ago(4)},
{id:'s6',order:'A108',table:'Takeaway #12',st:0,src:'Takeaway',items:[{n:'Whole Wheat Sourdough',q:3}],status:'QUEUED',ts:ago(2)}];
const NEXT={QUEUED:'PREPARING',PREPARING:'READY',READY:'SERVED'};
export function Provider({children}){
 const [user,setUser]=useState(null),[cart,setCart]=useState({}),[tickets,setTickets]=useState(SEED),[mode,setMode]=useState('Dine-in'),[seq,setSeq]=useState(104),[toast,setT]=useState('');
 const [ws,setWs]=useState({}),[subs,setSubs]=useState([{id:1,loaf:'Country Sourdough',freq:'Weekly',day:'Sunday',status:'ACTIVE'}]);
 const say=m=>{setT(m);setTimeout(()=>setT(''),2200)};
 const add=(id,d)=>setCart(c=>{const q=Math.max(0,(c[id]?.q||0)+d);const n={...c};q?n[id]={...n[id],q}:delete n[id];return n});
 const note=(id,t)=>setCart(c=>({...c,[id]:{...c[id],note:t}}));
 const lines=Object.entries(cart).map(([id,v])=>({...MENU.find(m=>m.id==id),...v}));
 const count=lines.reduce((a,l)=>a+l.q,0),sub=lines.reduce((a,l)=>a+l.q*l.p,0);
 const place=(lns,table,src)=>{const order='A'+seq;setSeq(s=>s+1);
  const by={};lns.forEach(l=>(by[l.st]=by[l.st]||[]).push({n:l.n,q:l.q,note:l.note}));
  setTickets(t=>[...t,...Object.entries(by).map(([st,items])=>({id:order+st,order,table,st:+st,src,items,status:'QUEUED',ts:Date.now()}))]);return order};
 const advance=id=>setTickets(t=>t.map(x=>x.id==id?{...x,status:NEXT[x.status]||x.status}:x));
 const wsSet=(s,v)=>setWs(w=>({...w,[s]:v}));
 return <Ctx.Provider value={{user,setUser,cart,setCart,add,note,lines,count,sub,tickets,place,advance,mode,setMode,ws,wsSet,subs,setSubs,toast:say}}>
 {children}{toast&&<div className="toast">{toast}</div>}</Ctx.Provider>}
export const HOME={customer:'/menu',waiter:'/waiter/floor',kitchen:'/kitchen',admin:'/admin'};
export const roleOf=e=>/admin/i.test(e)?'admin':/waiter/i.test(e)?'waiter':/kitchen|chef|barista/i.test(e)?'kitchen':'customer';
