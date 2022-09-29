import { ReactNode } from 'react'
import styles from './cartbox.module.css'
type SliderDrawerProps = {
    children?:ReactNode
}
export function SliderDrawer ({children}:SliderDrawerProps){
    return <div className = {styles.sideDrawerContainer}>
    <div className = {styles.closebtn}>
        <button>
        X
        </button>
    </div>
    <div>
        {children}
    </div>
    </div>
}