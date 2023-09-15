import React,{useRef, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {useParams} from 'react-router-dom'
import { FormComponent, SingleComponent } from './Whole_Components'
import '../Styles/editform.css'

function EditForm() {
  let {id} = useParams()
  let data = useSelector(state=>state.data[id-1])
  let dispatch = useDispatch()
  let [edit,setEdit] = useState(false)
  let [formData,setFormData] = useState(data)
  let {current} = useRef(data)
  let param_data = {data,functions:{
    changeHandler,submitHandler
  }}


  function changeHandler(e){
    if(e.target.name === 'is_live'){
      e.target.value === 'true' ? current[e.target.name] = true : current[e.target.name] = false
    }else{
    current[e.target.name] = e.target.value
    }
  }
  
  function submitHandler(e){
    e.preventDefault()
    setEdit(prev=>!prev)
    setFormData(prev=>{return{...prev,...current}})
    dispatch({type:'UPDATE',payload:formData})
  }
  return (
    <div>{
      edit ? <FormComponent details={param_data}>
        <button type="submit" id='form-submit'>{edit ? 'Save':"Edit"}</button>
      </FormComponent> : <SingleComponent details={data}>
      <button type="button" id='save-submit' onClick={()=>setEdit(prev=>!prev)}>{edit ? 'Save':"Edit"}</button>
      </SingleComponent>
      }
      </div>
  )
}

export default EditForm