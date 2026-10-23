import {NavLink,Navigate,Outlet,useNavigate} from 'react-router-dom';import {useApp,HOME} from './store.jsx';
export const rs=n=>'₹'+Number(n).toLocaleString('en-IN');
export const Badge=({c='grey',children})=><span className={'badge '+c}>{children}</span>;
export const Stepper=({v,on})=><span className="stepper"><button onClick={()=>on(-1)}>−</button><b>{v}</b><button onClick={()=>on(1)}>+</button></span>;
export const Tabs=({tabs,v,set})=><div className="tabs">{tabs.map(t=><button key={t} className={v==t?'on':''} onClick={()=>set(t)}>{t}</button>)}</div>;
export const Chips=({items,v,set})=><div className="chips">{items.map(t=><button key={t} className={'chip '+(v==t?'on':'')} onClick={()=>set(t)}>{t}</button>)}</div>;
export const Modal=({title,onClose,children})=><div className="modal" onClick={onClose}><div className="card col" onClick={e=>e.stopPropagation()}><div className="row between"><h2>{title}</h2><button className="btn ghost sm" onClick={onClose}>Close</button></div>{children}</div></div>;
export const F=({l,children,...p})=><label className="f">{l}{children||<input className="input" {...p}/>}</label>;
export const Table=({cols,rows,onRow})=><div style={{overflowX:'auto'}}><table><thead><tr>{cols.map(c=><th key={c}>{c}</th>)}</tr></thead><tbody>{rows.map((r,i)=><tr key={i} className={(onRow?'click ':'')+(r.low?'low':'')} onClick={()=>onRow&&onRow(r,i)}>{r.cells.map((c,j)=><td key={j}>{c}</td>)}</tr>)}</tbody></table></div>;
export const Logo=()=><span className="logo">Alterro <span className="muted">Bakehouse & Café</span></span>;
export function Guard({role}){const {user}=useApp();if(!user)return <Navigate to="/login" replace/>;if(user.role!=role)return <Navigate to={HOME[user.role]} replace/>;return <Outlet/>}
export function Customer(){const {count}=useApp();const L=[['/menu','Menu'],['/bread','Bread'],['/workshops','Workshops'],['/community','Community'],['/profile','Profile']];
 return <><div className="top"><Logo/><Badge c="grey">Table 4</Badge></div><div className="m"><Outlet/></div><nav className="bottom">{L.map(([to,l])=><NavLink key={to} to={to}>{l}</NavLink>)}</nav></>}
export function Waiter(){const {tickets}=useApp();const n=tickets.filter(t=>t.status=='READY').length;
 return <><div className="top"><Logo/><span className="muted">Waiter</span></div><div className="m"><Outlet/></div><nav className="bottom"><NavLink to="/waiter/floor">Floor</NavLink><NavLink to="/waiter/pickups">Pickups {n>0&&<Badge c="green">{n}</Badge>}</NavLink><NavLink to="/waiter/profile">Profile</NavLink></nav></>}
export function Admin(){const L=[['','Overview'],['orders','Orders'],['menu','Menu'],['stations','Stations & Staff'],['tables','Tables'],['inventory','Inventory'],['bakery-prep','Bakery Prep'],['workshops','Workshops'],['growth','Organic Growth'],['margins','Channel Margins'],['loyalty','Loyalty']];
 const {setUser}=useApp(),nav=useNavigate();
 return <div className="admin"><aside className="side"><div className="logo" style={{padding:'0 12px 18px'}}>Alterro</div>{L.map(([to,l])=><NavLink key={to} end={!to} to={'/admin'+(to&&'/'+to)}>{l}</NavLink>)}<a href="#" onClick={e=>{e.preventDefault();setUser(null);nav('/login')}}>Log out</a></aside><main><Outlet/></main></div>}
export const Head=({t,sub,children})=><div className="row between wrap" style={{marginBottom:18}}><div><h1>{t}</h1>{sub&&<p className="muted">{sub}</p>}</div><div className="row">{children}</div></div>;
