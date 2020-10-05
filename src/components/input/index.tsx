import React, { InputHTMLAttributes } from 'react'
import styles from './styles.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name:string
    placeholder:string
}

const Input: React.FC<InputProps> = ({placeholder, name, ...rest}) =>{
    return(
        <div className={styles.input_block}>
            <input type="text" placeholder={placeholder} id={name}{...rest}/>
        </div>
    )
}
export default Input