export function addNote(title, content){
    return{
        type:'ADD_NOTE',
        title:title,
        content:content
    }
}

export function removeNote(id){
    return{
        type:'REMOVE_NOTE',
        id:id
    }
}
export function editNote(title, content,index,notes){
    return{
        type:'EDIT_NOTE',
       index:index,
       note:notes,
       Newtitle:title,
       Newcontent:content
    }
}