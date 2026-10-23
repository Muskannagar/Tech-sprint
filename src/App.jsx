import {Routes,Route,Navigate} from 'react-router-dom';import {useApp,HOME} from './store.jsx';
import {Guard,Customer,Waiter,Admin} from './ui.jsx';import {Login,Register} from './pages/auth.jsx';
import * as C from './pages/customer.jsx';import * as W from './pages/waiter.jsx';import Kitchen from './pages/kitchen.jsx';import * as A from './pages/admin.jsx';
function Demo(){const {user,setUser}=useApp();if(!user)return null;
 return <div className="demo">Demo role: <select value={user.role} onChange={e=>{setUser({...user,role:e.target.value});location.assign(HOME[e.target.value])}}>{Object.keys(HOME).map(r=><option key={r}>{r}</option>)}</select></div>}
export default function App(){return <><Routes>
 <Route path="/login" element={<Login/>}/><Route path="/register" element={<Register/>}/><Route path="/" element={<Navigate to="/login"/>}/>
 <Route element={<Guard role="customer"/>}><Route element={<Customer/>}>
  <Route path="/menu" element={<C.Menu/>}/><Route path="/cart" element={<C.Cart/>}/><Route path="/orders/:id" element={<C.Track/>}/><Route path="/bread" element={<C.Bread/>}/>
  <Route path="/workshops" element={<C.Workshops/>}/><Route path="/workshops/:slug" element={<C.WorkshopDetail/>}/><Route path="/community" element={<C.Community/>}/><Route path="/profile" element={<C.Profile/>}/></Route></Route>
 <Route element={<Guard role="waiter"/>}><Route element={<Waiter/>}><Route path="/waiter/floor" element={<W.Floor/>}/><Route path="/waiter/order/:t" element={<W.OrderPad/>}/><Route path="/waiter/pickups" element={<W.Pickups/>}/><Route path="/waiter/profile" element={<W.WProfile/>}/></Route></Route>
 <Route element={<Guard role="kitchen"/>}><Route path="/kitchen" element={<Kitchen/>}/></Route>
 <Route element={<Guard role="admin"/>}><Route element={<Admin/>}><Route path="/admin" element={<A.Overview/>}/><Route path="/admin/orders" element={<A.Orders/>}/><Route path="/admin/menu" element={<A.MenuAdmin/>}/><Route path="/admin/stations" element={<A.Stations/>}/><Route path="/admin/tables" element={<A.Tables/>}/><Route path="/admin/inventory" element={<A.Inventory/>}/><Route path="/admin/bakery-prep" element={<A.Prep/>}/><Route path="/admin/workshops" element={<A.AWorkshops/>}/><Route path="/admin/growth" element={<A.Growth/>}/><Route path="/admin/margins" element={<A.Margins/>}/><Route path="/admin/loyalty" element={<A.Loyalty/>}/></Route></Route>
 </Routes><Demo/></>}
