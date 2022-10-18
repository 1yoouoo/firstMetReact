import { React, useRef, useState } from "react";

const Header = ({ onCreate }) => {
    const inputEl = useRef();
    const [state, setState] = useState({
        details:"" 
    })
    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const onButtonClick = () => {
        if (inputEl.current.value.length < 3) {
            inputEl.current.focus();
            return
        }
        onCreate(state.details)
        alert("저장 성공")
        setState({ 
            details:""
        })
    };
    return (
        <div>
            <input 
                name="details"
                ref={inputEl} 
                placeholder="Enter your task" 
                onChange={handleChangeState}
            />
            <button onClick={() => {
                onButtonClick();
            }}>Add</button>
        </div>
    )
}

export default Header