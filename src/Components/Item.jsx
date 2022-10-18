import { React } from "react";

const Item = ({ newItem }) => {
    return (
        <div>
            <h2>{newItem.details.length}개의 데이터</h2>
            <div>
                {newItem.map((it) => (
                <div key={it.id}>{it.details}</div>
                ))}
            </div>
        </div>
    );
}

export default Item
