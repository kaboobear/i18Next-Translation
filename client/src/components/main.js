import React, {useContext} from 'react';
import ItemForm from './item-form'
import Item from './item'

import {itemContext} from '../context/itemContext'

const Main = () => {
    const {items} = useContext(itemContext);

    return (
        <div className="main-section">
            <ItemForm/>

            {(items.length === 0) ? (
                <div className="empty-items">
                    List is Empty
                </div>
            )
            : (
                <div className="items">
                    {items.map(elem => <Item elem={elem} key={elem._id} />)}
                </div>
            )}
        </div>
    )
}

export default Main;