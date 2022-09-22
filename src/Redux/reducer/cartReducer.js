// not a component thus capital letter not required for this file naming convention

const initialData = {
    cartCount:0
}

const cartReducer = (state=initialData,action)=>{
    // state store the initial value
    // action is a function which do the operation define in it 

    switch(action.type){
        case 'ADD_ITEM':
            return{
                cartCount:++state.cartCount
            }
        case 'REMOVE_ITEM':
            return{
            cartCount:--state.cartCount
        }
        default:
            return state
    }

    return state
}


export default cartReducer