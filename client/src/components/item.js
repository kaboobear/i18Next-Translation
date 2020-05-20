import React, {useContext} from 'react';

import {itemContext} from '../context/itemContext'
import { useTranslation } from 'react-i18next';


const Item = (props) => {
    const { t } = useTranslation();
    const {deleteItem} = useContext(itemContext);

    return (
        <div className="item">
            <div className="item-title">
                {props.elem.title}
            </div>

            <div onClick={()=>deleteItem(props.elem._id)} className="item-delete">
            {t("Delete-item.1")}
            </div>
        </div>
    )
}

export default Item;