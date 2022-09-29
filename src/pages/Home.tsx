import {useEffect,useState} from 'react';
import { json } from 'stream/consumers';
import { StoreItem } from '../components/store-items'
import { useStoreDetails } from '../context';
import styles from '../styles/product-list.module.css'

export function Home () {
   const {data} = useStoreDetails()
    useEffect(()=>{
        console.log("data",data)
    },[data])
    //  const [data]= useProductData()
    // useEffect(()=>{
    //     console.log('from',data)
    // },[data])

    
    return <>
    <div className = {styles.productInfo }>
    {    
        //@ts-ignore
        data && data.map((item)=>{
        
        return <StoreItem key={item.id} itemDetails={item}/>
    })
    }    
    </div>
    
    </>
}

