import React, {useContext} from 'react';

import {itemContext} from '../context/itemContext'


const Item = (props) => {
    const {deleteItem} = useContext(itemContext);

    return (
        <div className="item">
            <div className="item-title">
                {props.elem.title}
            </div>

            <div onClick={()=>deleteItem(props.elem._id)} className="item-delete">
                Delete
            </div>
        </div>
    )
}

export default Item;