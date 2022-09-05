import styles from "../../styles/Output.module.css"

const Output = (props:any) => (
    <div className={styles.container}>
        <input 
            onChange = {props.handleChange}
            placeholder = "0"
            onKeyDown={props.handlePress}
            name = "number" 
            value={props.state.number === "" ? props.state.tempNumber : props.state.number} 
            className = {styles.input}
            type="number" 
            pattern="[0-9]*"
            ref={props.inputEl}
        /> 
    </div>
)

export default Output;