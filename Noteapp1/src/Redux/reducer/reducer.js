
const initialState = {
    notes:[],
};

function rootReducer(state = initialState ,action){
    if(action.type === 'ADD_NOTE'){
        return {
            notes:[
                ...state.notes,
                {
                    title:action.title,
                    content:action.content
                }

            ]
        }
    } 
    else if(action.type === 'REMOVE_NOTE'){
        return{
            notes: state.notes.filter((note, index)=>{
                return index !== action.id
            })
        }
    }
   else if(action.type === 'EDIT_NOTE'){
         const note=[
            ...state.notes];
            note.push(action.Newtitle);
            note.push(action.Newcontent);
            return{
                note,
            }
           
}
    else{
        return state
    }
}

export default rootReducer