import React, {useContext} from 'react';
import ItemForm from './item-form'
import Item from './item'
import { useTranslation } from 'react-i18next';

import {itemContext} from '../context/itemContext'

const Main = () => {
    const { t } = useTranslation();
    const {items} = useContext(itemContext);

    return (
        <div className="main-section">
            <ItemForm/>

            {(items.length === 0) ? (
                <div className="empty-items">
                    {t("Empty-list.1")}
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