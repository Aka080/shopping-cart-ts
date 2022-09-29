import React, { ReactNode, useContext, useState, useEffect } from "react";
import { isTemplateExpression } from "typescript";
import { useProductData } from "../hooks/useProductData";
import { Store } from "../pages/Store";
import { ProductDetailsFormat } from "../types";



type AppState = {
    data?: ProductDetailsFormat[],
    openCart : () => void,
    closeCart : () => void
    increaseQuantity : (id:number) => void,
    decreaseQuantity : (id:number) => void,
    removeItem : (id:number) => void,
    getItemQuantity : (id:number) => number,
    cartQuantity : ()=>number,
    cartItem: CartItem[],



}
type StoreContextProviderProps ={
    children: ReactNode
}

type CartItem ={
    id: number,
    quantity: number
}
export const StoreContext = React.createContext({} as AppState)

export const useStoreDetails = () => useContext(StoreContext)


export const StoreContextProvider = ({children}:StoreContextProviderProps)=>{
     const [data] = useProductData()
     const [cartItem,setCartItem] = useState<CartItem[]>([])

     useEffect(()=>console.log('fff',cartItem),[cartItem])
     
     const increaseQuantity = (id:number) =>{
        console.log('id recieved for add',id)
        let tempIndex:number | undefined;
        // if item exist, find it and increase its quantity by one
          const isItemInCart = cartItem.find((item,index)=>{
            // find index if it exist, for faster calculation
            
            if(item.id === id ) {
                console.log('i found a id',id,item.id)
                tempIndex = index
               
                console.log('i found a index',tempIndex)

            };
            return item.id === id
          })
          console.log('itemincart',isItemInCart)
          if(isItemInCart && typeof tempIndex === "number"){
            console.log('i found a id isitem',tempIndex)
              const updatedQuantity = {id: id, quantity: isItemInCart.quantity + 1}
              console.log('uppp',updatedQuantity,...cartItem.splice(tempIndex,1,updatedQuantity))
              const modifiedItem = [...cartItem];
              modifiedItem[tempIndex] = updatedQuantity;
              setCartItem(modifiedItem) ; 
          } else {
            console.log('else I run frm is inCart')
              setCartItem([...cartItem,{id,quantity:1}]) 
          }
     }

     const decreaseQuantity = (id:number) =>{
        let tempIndex:number | undefined;
        // if item exist, find it and increase its quantity by one
          const isItemInCart = cartItem.find((item,index)=>{
            // find index if it exist, for faster calculation
            if(item.id === id ) {
                tempIndex = index
                console.log('i run from decrease', tempIndex,index)
            };
            return item.id === id
          })
          console.log('decrease Is Item',isItemInCart)
          if(isItemInCart && tempIndex !== undefined){
              const updatedQuantity = {id,quantity:isItemInCart.quantity - 1
              }
              console.log('decrease updated quantity',updatedQuantity)
              let modifiedItem = [...cartItem];

              if(updatedQuantity.quantity === 0){
                console.log('quantity became zero should remove')
                modifiedItem.splice(tempIndex,1)
                setCartItem(modifiedItem) ;
              }else{
                modifiedItem[tempIndex] = updatedQuantity
                setCartItem(modifiedItem) ;
              }
              
          } 
     }
     const removeItem = (id:number) =>{
          setCartItem(()=>{
            const updatedArray = cartItem.filter((item)=>{
                return item.id !== id
            })
            return updatedArray
          })
     }

     const getItemQuantity = (id:number) =>{
        const itemDetails = cartItem.find((item) => {
            return item.id === id
        })
        return itemDetails?itemDetails.quantity : 0;
     }

     const cartQuantity = ():number =>{
         return cartItem.reduce((totalItem,item)=> totalItem + item.quantity,0)
        
     }




    //  {data, increaseQuantity, decreaseQuantity, removeItem, getItemQuantity, cartQuantity, cartItem}
    //@ts-ignore
    return <StoreContext.Provider value={{data, increaseQuantity, decreaseQuantity, removeItem, getItemQuantity, cartQuantity, cartItem}}>
        {children}
    </StoreContext.Provider>
}