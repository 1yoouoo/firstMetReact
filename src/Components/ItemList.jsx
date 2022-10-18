import React from "react";
import Item from "./Item.jsx"

const ItemList = ({ newItem }) => {
    return (
        <div>
            <h2>일기 리스트</h2>
            <h4>{newItem.length}개의 데이터가 있습니다.</h4>
            <div>
                {newItem.map((it) => (
                    <Item key={it.id} {...it}/>
                ))}
            </div>
        </div>
    )
}

ItemList.defaultProps = {
    newItem : []
}
export default ItemList
