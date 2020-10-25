import React, { useContext, useEffect } from 'react';
import { Context } from '../App';
import Item from './item';
import db from '../shared/firebase'

const TodoList = () => {

    const { state, dispatch } = useContext ( Context );
    const { items } = state;

    useEffect(() => {
        
        db.collection("tasks")
            .get()
            .then( docs => {
        
                let itemList = [];
            
                docs.forEach( doc => {
                    if(doc?.id && doc.id.length > 0) {
                        itemList.push({
                            id: doc.id,
                            title: doc.data().title
                        })
                    }
                });
                
                return itemList;
            })
            .then( itemList => {
                dispatch({
                    type : 'ITEMS_INIT',
                    payload : itemList
                })
            });
        
    }, [])

    let content = <p>Sto caricando...</p>

    if(items.length > 0){
        content = items.map( item =>
            <Item key={item.id} item={item} />
        )
    }

    return content;

}

export default TodoList