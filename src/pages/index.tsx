import React, {useState, useRef, useEffect} from "react";
import Buttons from "../components/buttons";
import Display from "../components/output";
import styles from "../styles/Calculator.module.css"


const Calculator = () => {
    const [state, setState] = useState({
        number: "", 
        tempNumber: ""
    })

    const inputEl = useRef<HTMLInputElement>(null);

    useEffect(()=> {
        inputEl.current?.focus();
    })
    
    const [operation, setOperation] = useState("");
    
    const handleChange =(e:any)=> {
        let {number} = state;
        let {value} = e.target;
        if(number === "")
            value = value[value.length-1];
        
        setState(prevState=>({...prevState, number: value}));
    }

    const handlePress = (e:any) =>{
        switch(e.key){
            case "*":   
                multiplication()
                break;
            case "/":   
                division();
                break;
            case "+":   
                addition();
                e.preventDefault()
                break;
            case "-":   
                soustraction();
                e.preventDefault()
                break;
            case "=":
                getTheResult(operation);
                break
            case "Enter":
                getTheResult(operation);
                break
            case "E":
                e.preventDefault()
                break
            case "e":
                e.preventDefault()
                break
        }
    }

    const getTheResult = (operation:string) => {
        switch(operation){
            case "*":   
                multiplication("equalTo")
                break;
            case "/":   
                division("equalTo");
                break;
            case "+":   
                addition("equalTo");
                break;
            case "-":   
                soustraction("equalTo");
                break;
        }
    }

    const soustraction =(key:string = "notEqualTo")=>{
        setOperation("");
        let number:number = 0;
        if(state.tempNumber === ""){
            number = Number(state.number);
        }else{
            if(state.number === ""){
                number = Number(state.tempNumber);
            }else{
                number = Number(state.tempNumber) - Number(state.number);
            }
        }
        setState(prevState=>({...prevState, tempNumber: `${number}`, number: ""}));
        if(key !== "equalTo")
            setOperation("-");
    }

    const addition =(key:string = "notEqualTo")=>{
        setOperation("");
        let number:number = 0;
        if(state.tempNumber === ""){
            number = Number(state.number);
        }else{
            if(state.number === ""){
                number = Number(state.tempNumber);
            }else{
                number = Number(state.tempNumber) + Number(state.number);
            }
        }
        setState(prevState=>({...prevState, tempNumber: `${number}`, number: ""}));
        if(key !== "equalTo")
            setOperation("+");
    }

    const division =(key:string = "notEqualTo")=>{
        setOperation("");
        let number:number = 0;
        if(state.tempNumber === ""){
            number = Number(state.number);
        }else{
            if(state.number === ""){
                number = Number(state.tempNumber);
            }else{
                number = Number(state.tempNumber) / Number(state.number);
            }
        }
        setState(prevState=>({...prevState, tempNumber: `${number}`, number: ""}));
        if(key !== "equalTo")
            setOperation("/");
    }

    const multiplication =(key:string = "notEqualTo")=>{
        setOperation("");
        let number:number = 0;
        if(state.tempNumber === ""){
            number = Number(state.number);
        }else{
            if(state.number === ""){
                number = Number(state.tempNumber);
            }else{
                number = Number(state.tempNumber) * Number(state.number);
            }
        }

        setState(prevState=>({...prevState, tempNumber: `${number}`, number: ""}));
        if(key !== "equalTo")
            setOperation("*");
    }

    const handleClick =(value:string)=>{
        switch(value){
            case "Clear":
                Clear();
                break;
            case "Delete":
                Delete();
                break;
            case "%":
                percentage();
                break;
            case "x":   
                multiplication()
                break;
            case "/":   
                division();
                break;
            case "+":   
                addition();
                break;
            case "-":   
                soustraction();
                break;
            case "=":
                getTheResult(operation);
                break
            default:
                writeNumber(value)
                break;
        }
    }

    const writeNumber = (value:string) =>{
        let {number} = state;
        number += `${value}`
        setState(prevState=>({...prevState, number: number}));
    }

    const Clear =()=>{
        setState({
            number: "", 
            tempNumber: ""
        });
        setOperation("");
    }

    const Delete = () => {
        let {number} = state;
        let string:string[] = number.split("");
        number = "";
        for(let i:number = 0; i < string.length-1; i++){
            number += `${string[i]}`
        }
        setState(prevState=>({...prevState, number: number}));
    }

    const percentage = () => {
        let {number} = state;
        number = `${Number(number) / 100}`
        setState(prevState=>({...prevState, number: number}));
    }
    
    return(
        <div className={styles.container}>
            <Display
                handleChange = {handleChange}
                handlePress = {handlePress}
                state = {state}
                inputEl = {inputEl}
            />
            <Buttons
                handleClick = {handleClick}
            />
        </div> 
    )
}

export default Calculator;