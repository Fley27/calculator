import Button from "./button";
import {buttons} from "../../data/index";
import styles from "../../styles/Button.module.css"

const Buttons = (props:any) => (
    <div className={styles.container}> 
        {
            buttons.map(item => (
                <Button handleClick = {props.handleClick} size= {`${item === "=" ? "wider": "normal"}`} value={item} key={item}/>
            )) 
        }
    </div>

)
export default Buttons;