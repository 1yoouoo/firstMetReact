import { React } from "react";

const Item = ({ details }) => {
    return (
        <div>
            <div>
                <span>
                    설명 : {details}
                </span>
            </div>
        </div>
    );
}

export default Item
