import React from "react";
import styles from "../../styles/Button.module.css"

const Button = ({value = "", size = "normal", ...props}) => (
    <button onClick={()=> props.handleClick(value)} className = {`${styles.button} ${size !== "normal" ? styles.wider: ""}`}>
        <span>{value}</span>
    </button>
)


export default Button;