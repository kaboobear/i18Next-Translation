import React, {createContext,useState} from 'react';
import axios from 'axios';

export const itemContext = createContext();

const ItemContextProvider = props => {
    const [items,setItems] = useState([]);
    const [itemsLoading,setItemsLoading] = useState(false);

    const loadItems = () =>{
        setItemsLoading(true);

        axios.get('/item')
        .then(res => {
            setItems(res.data);
            setItemsLoading(false);
        })
        .catch(err => {
            console.log(err);
            setItemsLoading(false);
        })
    }

    const addItem = (data) => {
        axios.post('/item/addItem',data)
        .then(res => {
            setItems([...items,res.data]);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const deleteItem = (id) => {
        axios.post('/item/deleteItem',{id})
        .then(res => {
            setItems(items.filter(elem => res.data._id !== elem._id));
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <itemContext.Provider value={{items,itemsLoading,loadItems,addItem,deleteItem}}>
            {props.children}
        </itemContext.Provider>
    )
}

export default ItemContextProvider;