import { React, useRef, useState } from "react";

const Header = ({ onCreate }) => {
    const inputEl = useRef(null);
    const [state, setState] = useState({
        details:""
    })

    const onButtonClick = () => {
        if (inputEl.current.value.length < 3) {
            inputEl.current.focus();
        }
        else {
            onCreate(state.details)
            alert("저장성공")
        }
        setState({
            details:""
        })
    };
    return (
        <div>
            <input ref={inputEl} placeholder="Enter your task"/>
            <button onClick={() => {
                onButtonClick();
            }}>Add</button>
        </div>
    )
}

export default Header