export const applyMiddleware = dispatch => action => {
    switch(action.type) {
        case 'ITEMS_ADD':
            console.log('cerco di aggiungere');
        break;
    }
}