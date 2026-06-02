'use client';
import React,{createContext,useContext,useReducer,useEffect} from 'react';
import{Product}from'@/data/products';

export interface CartItem extends Product{ quantity:number }
interface State{ items:CartItem[]; open:boolean }
type Action=
  |{type:'ADD';payload:Product}
  |{type:'REMOVE';payload:number}
  |{type:'QTY';payload:{id:number;qty:number}}
  |{type:'CLEAR'}|{type:'TOGGLE'}|{type:'OPEN'}|{type:'CLOSE'}
  |{type:'LOAD';payload:CartItem[]};

function reducer(s:State,a:Action):State{
  switch(a.type){
    case'ADD':{
      const ex=s.items.find(i=>i.id===a.payload.id);
      return ex?{...s,items:s.items.map(i=>i.id===a.payload.id?{...i,quantity:i.quantity+1}:i)}
               :{...s,items:[...s.items,{...a.payload,quantity:1}]};
    }
    case'REMOVE':return{...s,items:s.items.filter(i=>i.id!==a.payload)};
    case'QTY':
      if(a.payload.qty<=0)return{...s,items:s.items.filter(i=>i.id!==a.payload.id)};
      return{...s,items:s.items.map(i=>i.id===a.payload.id?{...i,quantity:a.payload.qty}:i)};
    case'CLEAR':return{...s,items:[]};
    case'TOGGLE':return{...s,open:!s.open};
    case'OPEN':return{...s,open:true};
    case'CLOSE':return{...s,open:false};
    case'LOAD':return{...s,items:a.payload};
    default:return s;
  }
}

interface Ctx{
  state:State;add:(p:Product)=>void;remove:(id:number)=>void;
  qty:(id:number,q:number)=>void;clear:()=>void;
  toggle:()=>void;openCart:()=>void;closeCart:()=>void;
  total:number;count:number;
}
const C=createContext<Ctx|undefined>(undefined);

export function CartProvider({children}:{children:React.ReactNode}){
  const[state,dispatch]=useReducer(reducer,{items:[],open:false});
  useEffect(()=>{
    try{const d=localStorage.getItem('Malwas-cart');if(d)dispatch({type:'LOAD',payload:JSON.parse(d)});}catch{}
  },[]);
  useEffect(()=>{localStorage.setItem('Malwas-cart',JSON.stringify(state.items));},[state.items]);
  const total=state.items.reduce((s,i)=>s+i.price*i.quantity,0);
  const count=state.items.reduce((s,i)=>s+i.quantity,0);
  return(
    <C.Provider value={{
      state,
      add:p=>dispatch({type:'ADD',payload:p}),
      remove:id=>dispatch({type:'REMOVE',payload:id}),
      qty:(id,q)=>dispatch({type:'QTY',payload:{id,qty:q}}),
      clear:()=>dispatch({type:'CLEAR'}),
      toggle:()=>dispatch({type:'TOGGLE'}),
      openCart:()=>dispatch({type:'OPEN'}),
      closeCart:()=>dispatch({type:'CLOSE'}),
      total,count,
    }}>{children}</C.Provider>
  );
}
export const useCart=()=>{const c=useContext(C);if(!c)throw new Error('no cart');return c;};
