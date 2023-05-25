import { useDispatch, useSelector } from 'react-redux'
import { removeNote } from '../Redux/action';
import { useNavigate } from 'react-router-dom';

function App() {
  const notes = useSelector((state) => state.notes)
  console.log(notes);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  return (
    <>
         <div className='mt-3' style={{ marginLeft: "7px" }}>
          <button className=" btn btn-secondary" role="button" onClick={() => navigate('/')}>Go To Dashboard</button>
        </div>
        <div className='d-flex'>
          {
            notes.map((note, index) => {
              console.log(index);
              return (
                <div className="card" style={{ width: "18rem", margin: '2rem' }} key={index}>
                  <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.content}</p>
                    <a href="/" className="btn btn-danger" style={{ marginLeft: "50px" }} onClick={() => dispatch(removeNote(index))}>Delete</a>
                    <a href="/" className="btn btn-primary" style={{ marginLeft: "20px" }} onClick={() => navigate('/Editnotes')}>Edit</a>
                  </div>
                </div>

              )
            })
          }

        </div>
    </>
  );
}

export default App;