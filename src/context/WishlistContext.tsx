'use client';
import React,{createContext,useContext,useReducer,useEffect}from'react';
import{Product}from'@/data/products';

interface State{items:Product[]}
type Action={type:'TOGGLE';payload:Product}|{type:'LOAD';payload:Product[]};

function reducer(s:State,a:Action):State{
  if(a.type==='TOGGLE'){
    const ex=s.items.find(i=>i.id===a.payload.id);
    return{items:ex?s.items.filter(i=>i.id!==a.payload.id):[...s.items,a.payload]};
  }
  if(a.type==='LOAD')return{items:a.payload};
  return s;
}

interface Ctx{items:Product[];toggle:(p:Product)=>void;has:(id:number)=>boolean}
const C=createContext<Ctx|undefined>(undefined);

export function WishlistProvider({children}:{children:React.ReactNode}){
  const[state,dispatch]=useReducer(reducer,{items:[]});
  useEffect(()=>{
    try{const d=localStorage.getItem('Malwas-wl');if(d)dispatch({type:'LOAD',payload:JSON.parse(d)});}catch{}
  },[]);
  useEffect(()=>{localStorage.setItem('Malwas-wl',JSON.stringify(state.items));},[state.items]);
  return(
    <C.Provider value={{
      items:state.items,
      toggle:p=>dispatch({type:'TOGGLE',payload:p}),
      has:id=>state.items.some(i=>i.id===id),
    }}>{children}</C.Provider>
  );
}
export const useWishlist=()=>{const c=useContext(C);if(!c)throw new Error('no wishlist');return c;};
