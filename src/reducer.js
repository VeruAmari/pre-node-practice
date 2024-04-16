const reducer = (state, action)=>{
    switch (action.type){
        case 'kiss': return ({...state, kiss: Number(state.kiss) + 1})
        default: throw Error('Type of Kiss '+ action.type +' not supported.') 
    }
}

export default reducer;