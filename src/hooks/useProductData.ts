import {useState,useEffect,useCallback} from 'react'
import { ProductDetailsFormat } from '../types';



export function useProductData (){
    const [data,setData] = useState<ProductDetailsFormat[]>([]);
    const fetchProductDetails =useCallback(async () =>{
        const productData = await fetch('https://dummyjson.com/products').then(res => res.json()).then(res => res.products)
        setData(productData)    
    },[])
        
    useEffect(()=>{
    fetchProductDetails()
    },[])
    useEffect(()=>{
    console.log('updated...')
        },[data])
   
        

    return [data]
    

}
