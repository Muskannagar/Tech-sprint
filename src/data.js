export const STATIONS=['Main Oven Kitchen','Specialty Coffee Bar','Cold Matcha Bar'];
export const CATS=['Sourdough','Pastries','Coffee','Matcha','Cold Drinks'];
export const MENU=[
{id:1,n:'Country Sourdough',cat:'Sourdough',st:0,p:340,c:95,v:1,e:'🍞',d:'36-hour cold ferment, blistered crust'},
{id:2,n:'Seeded Rye',cat:'Sourdough',st:0,p:380,c:110,v:1,e:'🌾',d:'Dense rye with toasted seeds'},
{id:3,n:'Whole Wheat Sourdough',cat:'Sourdough',st:0,p:320,c:90,v:1,e:'🥖',d:'Stoneground, nutty and slow-fermented'},
{id:4,n:'Butter Croissant',cat:'Pastries',st:0,p:180,c:55,v:1,e:'🥐',d:'27 layers of cultured butter'},
{id:5,n:'Almond Croissant',cat:'Pastries',st:0,p:240,c:75,v:1,e:'🥐',d:'Twice-baked with frangipane'},
{id:6,n:'Espresso',cat:'Coffee',st:1,p:140,c:30,v:1,e:'☕',d:'Double shot, Ethiopian blend'},
{id:7,n:'Cappuccino',cat:'Coffee',st:1,p:210,c:45,v:1,e:'☕',d:'Velvety steamed milk'},
{id:8,n:'Iced Matcha Latte',cat:'Matcha',st:2,p:280,c:80,v:1,e:'🍵',d:'First-harvest Uji matcha, oat milk'},
{id:9,n:'Cold Brew',cat:'Cold Drinks',st:2,p:230,c:50,v:1,e:'🧊',d:'18-hour steeped'}];
export const WORKSHOPS=[
{slug:'sourdough-masterclass',t:'Sourdough Masterclass',cat:'Baking',date:'Sat 1 Nov',time:'10:00 AM',price:1200,seats:10,booked:7,e:'🍞',mode:'open'},
{slug:'latte-art',t:'Latte Art Basics',cat:'Coffee',date:'Sun 2 Nov',time:'4:00 PM',price:900,seats:8,booked:8,e:'☕',mode:'full'},
{slug:'pastry-lab',t:'Laminated Pastry Lab',cat:'Baking',date:'Sat 8 Nov',time:'11:00 AM',price:1500,seats:10,booked:4,e:'🥐',mode:'vip'},
{slug:'acoustic-evening',t:'Acoustic Evening',cat:'Music',date:'Fri 14 Nov',time:'7:30 PM',price:600,seats:30,booked:12,e:'🎸',mode:'locked'},
{slug:'watercolour',t:'Watercolour & Coffee',cat:'Art',date:'Sun 16 Nov',time:'3:00 PM',price:800,seats:12,booked:5,e:'🎨',mode:'open'}];
export const LOAVES=['Country Sourdough','Seeded Rye','Whole Wheat'];
export const TABLES=[1,2,3,4,5,6,7,8,9,10,11,12].map(n=>({n,seats:n%3?4:2,zone:n<9?'Indoor':'Patio'}));
export const NODES=[
{id:'Anna',x:350,y:200,t:'Artisan VIP',o:48,p:'',j:'Jan 2026'},{id:'Rohan',x:190,y:110,t:'Community Insider',o:22,p:'Anna',j:'Feb 2026'},
{id:'Meera',x:500,y:100,t:'Community Insider',o:19,p:'Anna',j:'Feb 2026'},{id:'Kabir',x:520,y:300,t:'Member',o:9,p:'Anna',j:'Mar 2026'},
{id:'Sana',x:200,y:300,t:'Member',o:7,p:'Anna',j:'Mar 2026'},{id:'Dev',x:350,y:50,t:'Member',o:5,p:'Anna',j:'Apr 2026'},
{id:'Isha',x:90,y:50,t:'Member',o:4,p:'Rohan',j:'May 2026'},{id:'Neel',x:70,y:170,t:'Member',o:3,p:'Rohan',j:'May 2026'},
{id:'Tara',x:620,y:40,t:'Member',o:6,p:'Meera',j:'Jun 2026'},{id:'Arjun',x:650,y:150,t:'Member',o:2,p:'Meera',j:'Jul 2026'},{id:'Zoya',x:640,y:350,t:'Member',o:2,p:'Kabir',j:'Aug 2026'}];
export const RAW=[{n:'Organic Rye Flour',s:8000,u:'g',r:25000},{n:'Whole Wheat Flour',s:40000,u:'g',r:15000},{n:'Bread Flour',s:60000,u:'g',r:20000},{n:'Levain Starter',s:9000,u:'g',r:5000},{n:'Coffee Beans',s:12000,u:'g',r:5000},{n:'Ceremonial Matcha',s:1200,u:'g',r:2000}];
