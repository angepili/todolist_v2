export const useActions = (state,dispatch) => ({
    triggerAction : data => dispatch({ type: 'ITEMS_ADD', payload : data })
})