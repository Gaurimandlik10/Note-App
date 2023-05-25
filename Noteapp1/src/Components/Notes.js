import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../Redux/action';

function App() {
    let [title, setTitle] = useState('');
    let [content, setContent] = useState('')
  
    const dispatch = useDispatch();
  
    const navigate = useNavigate();
  
    function handleSubmission(e){
      e.preventDefault();
      dispatch(addNote(title, content))
      setTitle('')
      setContent('')
      navigate('/Home')
    }
    return (
        <>
            <div className="card w-50 border-dark shadow-lg mt-5 " style={{ marginLeft: "400px" }}>
                <div className="card-body ">
                    <h5 className=" card-header">Title</h5>
                    <div className="form" style={{ marginTop: "10px"}} value={title} placeholder='enter title' onChange = {(e)=> setTitle(e.target.value)} required>
                        <textarea style={{maxHeight:"20px"}}  className="form-control" id="floatingTextarea"></textarea>
                    </div>
                    <h5 className=" card-header mt-3">Content</h5>
                    <div className="form" value={content} placeholder='enter content' onChange = {(e)=> setContent(e.target.value)} required>
                        <textarea className="form-control"  id="floatingTextarea2" style={{ height: "100px", marginTop: "10px" }}></textarea>
                    </div>
                    <a href="/" className="btn btn-success mt-3" onClick={handleSubmission} >Submit</a>
                </div>
            </div></>
    );
}

export default App;