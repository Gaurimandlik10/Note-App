import {  useState } from "react";
import { useDispatch } from 'react-redux';
import { editNote } from '../Redux/action';
function App({notes,title , content}) {
    const dispatch = useDispatch();
    const [Newtitle , setNewtitle]=useState(notes.title);
    const [Newcontent , setNewcontent]=useState(notes.content);
   const inputHandlertitle=(e)=>{
        setNewtitle(e.target.value)
        console.log(Newtitle );
   }
   const inputHandlercontent=(e)=>{
        setNewcontent(e.target.value)
        console.log(Newcontent );

    }
    return (
        <>
 <div className="card w-50 border-dark shadow-lg mt-5 " style={{ marginLeft: "400px" }}>
            <div className="card-body ">
              <h5 className=" card-header">Title</h5>
              <div className="form" style={{ marginTop: "10px" }} value={title} onChange={inputHandlertitle} placeholder='enter title' required>
                <textarea style={{ maxHeight: "20px" }} className="form-control" id="floatingTextarea"></textarea>
              </div>
              <h5 className=" card-header mt-3">Content</h5>
              <div className="form" value={content} onChange={inputHandlercontent}  placeholder='enter content' required>
                <textarea className="form-control" id="floatingTextarea2" style={{ height: "100px", marginTop: "10px" }}></textarea>
              </div>
              <a href="/" className="btn btn-success mt-3"onClick={() => dispatch(editNote())}>Upadate</a>
            </div>
          </div>





        </>
        );
    }
    
    export default App;