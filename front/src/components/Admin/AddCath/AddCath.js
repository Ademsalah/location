import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {  postCategorie } from '../../../api/Cathegories/Cath';
import { useDispatch } from 'react-redux';
const AddCath = () => {
  const dispatch = useDispatch();

    const navigate=useNavigate()
    const [name, setName] = useState("");
  
  
    
    const handleSubmit=async (value)=>{
        await postCategorie(value)
        await alert('a7sant')
        navigate('/admin')
    }
  return (
    <div><br/><br/>
      <form  className="form-add">
        
      <label  >
        zzzzz
      </label><br/><br/>
      <input
       className="input"
       type="text"
       onChange={(e) => setName(e.target.value)}
       value={name}
      />
        
        <section className="ButtonsContainer">
  <button onClick={()=>handleSubmit({name})} >
                ziiiid hbibi
              </button>
              </section>
              </form>
    </div>
  )
}

export default AddCath
