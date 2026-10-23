import {useState,useEffect} from 'react';import {useApp} from '../store.jsx';import {STATIONS} from '../data.js';import {Badge,Logo} from '../ui.jsx';
export default function Kitchen(){const {tickets,advance}=useApp(),[st,setSt]=useState(0),[,tick]=useState(0),[now,setNow]=useState(new Date());
 useEffect(()=>{const i=setInterval(()=>{tick(x=>x+1);setNow(new Date())},15000);return()=>clearInterval(i)},[]);
 const mine=tickets.filter(t=>t.st==st),cols=[['QUEUED','Queued','Start prep'],['PREPARING','Preparing','Mark ready'],['READY','Ready for pickup',null]];
 return <div className="kds"><div className="card row between wrap"><div><h2>{STATIONS[st]}</h2><span className="muted">{now.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})} · Live</span></div>
 <div className="chips">{STATIONS.map((s,i)=><button key={s} className={'chip '+(st==i?'on':'')} onClick={()=>setSt(i)}>{s}</button>)}</div></div>
 <div className="kcols">{cols.map(([k,l,btn])=><div key={k} className="kcol"><div className="row between"><b>{l}</b><Badge>{mine.filter(t=>t.status==k).length}</Badge></div>
 {mine.filter(t=>t.status==k).map(t=>{const m=Math.floor((Date.now()-t.ts)/60000),c=k=='READY'?'green':m>15?'red':m>8?'amber':'';
 return <div key={t.id} className={'card tk col '+c}><div className="row between"><h3>{t.table}</h3><Badge c={c||'grey'}>{m} min</Badge></div><span className="muted">#{t.order} · {t.src}</span>
 {t.items.map((x,i)=><div key={i}><b>{x.q} × {x.n}</b>{x.note&&<div className="muted">Note: {x.note}</div>}</div>)}
 {btn&&<button className={'btn '+(k=='QUEUED'?'':'o')} onClick={()=>advance(t.id)}>{btn}</button>}{k=='READY'&&<span className="muted">Waiting for waiter</span>}</div>})}</div>)}</div></div>}
