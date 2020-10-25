import React, {useContext } from 'react';
import { Context } from '../App';

const Item = props => {

    const { state, dispatch } = useContext(Context);
    const {  id,  title } = props.item;

    const deleteItem = id => {
        dispatch({
            type : 'ITEMS_DELETE',
            payload : {
                id
            }
        })
        return;
    }

    const editItem = id => {
        dispatch({
            type : 'MODE_EDIT',
            payload : {
                id
            }
        })
        return;
    }

    return(
        <p>{title} <button onClick={ () => deleteItem(id) }>[x]</button> <button onClick={ ()=> editItem(id) }>[edit]</button></p>
    )
    
}

export default Item;