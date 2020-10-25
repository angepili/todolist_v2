const itemReducer = ( prevState, action ) => {

    switch(action.type){
        case 'ITEMS_INIT':
            return {
                ...prevState,
                items : action.payload
            }
        case 'ITEMS_ADD':
            return {
                ...prevState,
                items : prevState.items.concat({
                    id: action.payload.id,
                    title: action.payload.title
                })
            }
        case 'ITEMS_EDIT':
            return {
                ...prevState,
                items: prevState.items.map( item => {
                    if(item.id === action.payload.id){
                        item.title = action.payload.title
                    }
                    return item;
                })
            }
        case 'ITEMS_DELETE':
            return {
                ...prevState,
                items : prevState.items.filter( item => item.id !== action.payload.id )
            }
        case 'MODE_EDIT':
            return {
                ...prevState,
                mode : {
                    type : 'edit',
                    id : action.payload.id
                }
            }
        case 'MODE_ADD':
            return {
                ...prevState,
                mode : {
                    type : 'add',
                    id : null
                }
            }
        default:
            return prevState;            
    }

}

export default itemReducer