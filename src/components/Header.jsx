import React from 'react';
import {NavLink} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import '../Styles/header.css'

function Header() {
    let dispatcher = useDispatch()
    function inputHandler(e){
        e.preventDefault()
        let form_input = document.getElementById('form-input')
        if(form_input.value.length > 11){
            dispatcher({type:'FILTER-RESET'})
            dispatcher({type:'SEARCH',payload:form_input.value.trim()})
            form_input.value = ''
        }else{
            alert('Enter an valid Name')
        }
    }
    
    function resetHandler(){
        dispatcher({type:'SEARCH-RESET'})
        dispatcher({type:'FILTER-RESET'})
    }
    return (
    <>
        <nav className='navbar'>
            <div className="title" >
                <h2 className='title-text'>
                    <span className='title-text-1'>
                        STOCK
                    </span>
                    <span className='title-text-2'>
                        WARE
                    </span>
                </h2>
            </div>
            <div className="search-bar">
                <div className="inner-search-container">
                <NavLink to={'/'} className="navlink" onClick={()=>resetHandler()}>
                    Home
                </NavLink>
                <div className="search-bar-form" >
                    <form onSubmit={(e)=>inputHandler(e)} className='search-form'>
                        <input  list='suggestions' id="form-input" type='text' placeholder='Type Warehouse-Id' />
                        <datalist id="suggestions">
                        <option value="Warehouse-"></option>
                        </datalist>
                        <button type="submit" id="form-button">
                            Click
                        </button>
                    </form>
                </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header