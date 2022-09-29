import styles from './storeItem.module.css'
import { ProductImage } from './ProductImage'
import { ProductInfo } from './ProductInfo'
import {CartInfo} from './cartInfo'
import { ProductDetailsFormat } from '../../types'
import { useEffect } from 'react'

type StoreItemProps = {
    itemDetails: ProductDetailsFormat
    
}

export function StoreItem ({itemDetails}:StoreItemProps) {
    // useEffect(()=> console.log('item',itemDetails),[itemDetails])
    return <>
   <div className = {styles.cardContainer }>
    <ProductImage imageLink={itemDetails.images[0]} itemDescription= {itemDetails.description}/>
    <ProductInfo productTitle = {itemDetails.title} productPrice= {itemDetails.price}/>
    <CartInfo itemId = {itemDetails.id}/>
    </div>
    </>
}