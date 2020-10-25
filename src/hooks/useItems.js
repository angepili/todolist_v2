import react, { useEffect, useContext } from 'react'
import { Context } from '../App';
import db from '../shared/firebase';

const useItems = () => {

    const { state, dispatch } = useContext(Context);

    useEffect( () => {

        console.log(dispatch({
            type : 'MODE_ADD',
            payload : [{
                id: 1121212,
                title: '123hhj123'
            }]
        }));

        // db.collection("tasks")
        //     .get()
        //     .then( docs => {
            
        //         let items:object[] = [];
                
        //         docs.forEach( doc => {
        //             if(doc?.id && doc.id.length > 0) {
        //                 items.push({
        //                     id: doc.id,
        //                     title: doc.data().title
        //                 })
        //             }
        //         });
    
        //         return items;
        
        //     })
        //     .then( items => {
        //         console.log('dentro qui');
        //         dispatch({
        //             type : Type.Init,
        //             payload : items
        //         })
        //     });

    })

}

export default useItems;