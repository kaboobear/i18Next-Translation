import React, {useContext, useState} from 'react';

import {itemContext} from '../context/itemContext'
import { useTranslation } from 'react-i18next';

const ItemForm = () => {
    const { t } = useTranslation();
    const {addItem} = useContext(itemContext);
    const [text,setText] = useState('');

    const onChange = (e) =>{
        const {value} = e.target;
        setText(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const data = {title:    text};
        addItem(data);
        setText('');
    }

    return (
        <form onSubmit={onSubmit} className="item-form">
            <div className="simple-input">
                <input
                    autoComplete="off"
                    type="text"
                    placeholder={t("Text-holder.1")}
                    onChange={onChange}
                    value={text}
                    name='text'/>
            </div>

            <button className="btn" type="submit">{t("Add-item.1")}</button>
        </form>
    )
}

export default ItemForm;