import { useRef } from "react"
import { useDispatch } from "react-redux"

export function FormComponent(params){
    let {details,children} = params
    let {data,functions:{changeHandler,submitHandler}} = details
    let {current} = useRef(data)

    return(
        <>
        <form id='form-component-edit' onSubmit={(e)=>{submitHandler(e)}}>
        <div className='edit-form'>
          <label for='name'  className='form-item'>
            Name :
            <input name='name' type='text' defaultValue={current.name} onChange={e=>changeHandler(e)} autoFocus={true}/>
          </label>
          <label for='code' className='form-item'>
            Code :
            <input name='code' type='text' defaultValue={current.code} onChange={e=>changeHandler(e)}/>
          </label>
          <label for='city' className='form-item'>
            City :
            <input name="city" type='text' defaultValue={current.city} onChange={e=>changeHandler(e)}/>
          </label>
          <label for='space' className='form-item'>
            Space :
            <input name='space' type='text' defaultValue={current.space_available} onChange={e=>changeHandler(e)}/>
          </label>
          <label for='type' className='form-item'>
            Type :
            <input name='type' type='text' defaultValue={current.type} onChange={e=>changeHandler(e)}/>
          </label>
          <label for="cluster" className='form-item'>
            Cluster :
            <input name='cluster' type='text' defaultValue={current.cluster} onChange={e=>changeHandler(e)}/>
          </label>
          <label for="is_live" className='form-item'>
            Available :
<select name="is_live" className="select-input" id="is_live" defaultValue={current.is_live} onChange={e=>changeHandler(e)}>
  <option value={true} >True</option>
  <option value={false}>False</option>
</select>
          </label>
        {children}
        </div>
      </form>
        </>
    )
}

export function SingleComponent(params){
    let {details,children} = params
    return(
        <>
        <div className='save-component-edit'>
      <div className='save-form'>
      <label for='name'  className='save-item'>
            Name :
            <div name='name' className='compoenet-item'>{details.name}</div>
          </label>
          <label for='code' className='save-item'>
            Code :
            <div name='code' className='compoenet-item'>{details.code}</div>
          </label>
          <label for='city' className='save-item'>
            City :
            <div name="city" className='compoenet-item'>{details.city}</div>
          </label>
          <label for='space' className='save-item'>
            Space :
            <div name='space' className='compoenet-item'>{details.space_available}</div>
          </label>
          <label for='type' className='save-item'>
            Type :
            <div name='type' className='compoenet-item'>{details.type}</div>
          </label>
          <label for="cluster" className='save-item'>
            Cluster :
            <div name='cluster' className='compoenet-item'>{details.cluster}</div>
          </label>
          {children}
        </div>
      </div>
        </>
    )
}

export function CardComponent({item}){
  return(
    <>
    <div className="card-item" key={item.name}>
          <h1>
          <label className='card-name'  id='label-item'>
            <span className='card-parameter'>Name :</span>
            <h2 name='name' id='card-value'>
              {item.name}
            </h2>
          </label>
          </h1>
          <h1>
          <label className='card-code'  id='label-item'>
            <span className='card-parameter'>Code :</span>
            <h2 name='code' id='card-value'>
              {item.code}
            </h2>
          </label>
          </h1>
          <h1>
          <label className='card-city'  id='label-item'>
            <span className='card-parameter'>City :</span>
            <h2 name='city' id='card-value'>
              {item.city}
            </h2>
          </label>
          </h1>
          <h1>
          <label className='card-space'  id='label-item'>
            <span className='card-parameter'>Space :</span>
            <h2 name='space' id='card-value'>
              {item.space_available} acre
            </h2>
          </label>
          </h1>
          <h1>
          <label className='card-availability'  id='label-item'>
            <span className='card-parameter'>Cluster :</span>
            <h2 name='cluster' id='card-value'>
              {item.cluster}
            </h2>
          </label>
          </h1>
          <h1>
          <label className='card-availability'  id='label-item'>
            <span className='card-parameter'>Available :</span>
            <h2 name='availability' id='card-value'>
              {item.is_live ? 'Yes':"No"}
            </h2>
          </label>
          </h1>
          <a href={`${'warehouse/'}${item.id}`} className='link'  rel='noopener'>&#8658;</a>
          </div>
    </>
  )
}

export function SearchComponent({data}){
  return(
    <>
     <div className="card-item search-item" key={data.name}>
    <h1>
    <label className='card-name'  id='label-item'>
      <span className='card-parameter'>Name :</span>
      <h2 name='name' id='card-value'>
        {data.name}
      </h2>
    </label>
    </h1>
    <h1>
    <label className='card-code'  id='label-item'>
      <span className='card-parameter'>Code :</span>
      <h2 name='code' id='card-value'>
        {data.code}
      </h2>
    </label>
    </h1>
    <h1>
    <label className='card-city'  id='label-item'>
      <span className='card-parameter'>City :</span>
      <h2 name='city' id='card-value'>
        {data.city}
      </h2>
    </label>
    </h1>
    <h1>
    <label className='card-space'  id='label-item'>
      <span className='card-parameter'>Space :</span>
      <h2 name='space' id='card-value'>
        {data.space_available} acre
      </h2>
    </label>
    </h1>
    <h1>
    <label className='card-availability'  id='label-item'>
      <span className='card-parameter'>Cluster :</span>
      <h2 name='cluster' id='card-value'>
        {data.cluster}
      </h2>
    </label>
    </h1>
    <h1>
    <label className='card-availability'  id='label-item'>
      <span className='card-parameter'>Available :</span>
      <h2 name='availability' id='card-value'>
        {data.is_live ? 'Yes':"No"}
      </h2>
    </label>
    </h1>
    <a href={`${'warehouse/'}${data.id}`} className='link'  rel='noopener'>&#8658;</a>
    </div>
    </>
  )
}


export function FilterCompoenent(){
  let dispatcher = useDispatch()
  let filter_values = {}

  function changeHandler(e){
    let keys = Object.keys(filter_values) 
    if(keys.length === 0){
      filter_values[e.target.id] = [e.target.value]
    }else{
      if (keys.includes(e.target.id)){
        if(e.target.checked === false){
          let index = filter_values[e.target.id].indexOf(e.target.value)
          if (filter_values[e.target.id].length === 1){
            filter_values[e.target.id].splice(index, 1)
            delete filter_values[e.target.id]
          }else{
            filter_values[e.target.id].splice(index, 1)
          }
        }else{
          filter_values[e.target.id].push(e.target.value)
        }
      }else{
        filter_values[e.target.id] = [e.target.value]
      }
    }
  }

  function filterPropertyHandler(e){
    if(e.target.id === 'space'){
      filter_values['space'] = parseInt(e.target.value)
    }else{
      filter_values['is_alive'] = e.target.checked ;
      if(!e.target.checked) delete filter_values[e.target.id];
    }
  }

  function filterIconHandler(){
    let filter_cross_btn = document.querySelector('.cross-btn')
    let filter_container = document.querySelector('.filter-container')
    let filter_list = document.querySelector('.filter-list')
    filter_container.classList.toggle('filter-container-extension')
    filter_cross_btn.classList.toggle('btn-active')
    filter_list.classList.toggle('active')
  }

  function resetHandler(parameter){
    for(let x of parameter){
      x.checked = false
    }
  }

  function filterSubmitHandler(e){
    e.preventDefault()
    if(Object.keys(filter_values).length === 0){
      alert("No Filter's applied")
     }else{
       dispatcher({type:'FILTER',payload:filter_values})
       let reset_parameters = document.getElementsByClassName('filter-parameter')
       filter_values = {}
       filterIconHandler()
       resetHandler(reset_parameters)
     }
  }

  return(
    <>
         <form onSubmit={(e)=>filterSubmitHandler(e)} className='filter-container' key={'form'}>
      <div className='filter-btn-list'>
     <button type='button' className='filter-btn' onClick={()=>filterIconHandler()}>
      &#8516;
      </button>
     <button type='button' className='filter-btn cross-btn' onClick={()=>filterIconHandler()}>
     &#10011;
      </button>

      </div>
      <div className='filter-list'>
        <details>
          <summary>City</summary>
        <div className='filter-list-item'>
          <label className='label-filter'>
          <input type='checkbox' value='Chennai' id='city'  className='filter-parameter' onChange={(e)=>changeHandler(e)}/>
          Chennai
          </label>
          <label className='label-filter'>
          <input type='checkbox' value='Delhi' id='city' className='filter-parameter' onChange={(e)=>changeHandler(e)}/>
          Delhi
          </label>
          <label className='label-filter'>
          <input type='checkbox' value='Indore' id='city' className='filter-parameter' onChange={(e)=>changeHandler(e)}/>
          Indore
          </label>
          <label className='label-filter'>
          <input type='checkbox' value='Bangalore' id='city' className='filter-parameter' onChange={(e)=>changeHandler(e)}/>
          Bangalore
          </label>
          <label className='label-filter'>
          <input type='checkbox' value='Guwahati' id='city' className='filter-parameter' onChange={(e)=>changeHandler(e)}/>
          Guwahati
          </label>
          <label className='label-filter'>
          <input type='checkbox' value='Mumbai' id='city' className='filter-parameter' onChange={(e)=>changeHandler(e)}/>
          Mumbai
          </label>
        </div>
        </details>
        <details>
          <summary>Cluster</summary>
        <div className='filter-list-item'>
        <label className='label-filter'>
          <input type='checkbox' value='cluster-a-1' id='cluster' className='filter-parameter' onChange={(e)=>changeHandler(e)}/>
          Cluster-a-1
          </label>
          <label className='label-filter'>
          <input type='checkbox' value='cluster-a-2' id='cluster' className='filter-parameter' onChange={(e)=>changeHandler(e)}/>
          Cluster-a-2
          </label>
          <label className='label-filter'>
          <input type='checkbox' value='cluster-a-21' id='cluster' className='filter-parameter' onChange={(e)=>changeHandler(e)}/>
          Cluster-a-21
          </label>
          <label className='label-filter'>
          <input type='checkbox' value='cluster-a-32' id='cluster' className='filter-parameter' onChange={(e)=>changeHandler(e)}/>
          Cluster-a-32
          </label>
          <label className='label-filter'>
          <input type='checkbox' value='cluster-v-2' id='cluster' className='filter-parameter' onChange={(e)=>changeHandler(e)}/>
          Cluster-v-2
          </label>
        </div>
        </details>
        <details>
          <summary>Space</summary>
        <div className='filter-list-item'>
        <label className='label-filter'>
          <input type='radio' name='space' value='100' id='space' className='filter-parameter' onChange={(e)=>filterPropertyHandler(e)}/>
          {'<'} 100
          </label>
          <label className='label-filter'>
          <input type='radio' name='space' value='1000' id='space' className='filter-parameter' onChange={(e)=>filterPropertyHandler(e)}/>
          {'<'} 1000
          </label>
          <label className='label-filter'>
          <input type='radio' name='space' value='10000' id='space' className='filter-parameter' onChange={(e)=>filterPropertyHandler(e)}/>
          {'>'} 1000
          </label>
        </div>
        </details>
        <details>
          <summary>Availablility</summary>
        <div className='filter-list-item'>
        <label className='label-filter'>
          <input type='checkbox' value='alive' id='availability' className='filter-parameter' onChange={(e)=>filterPropertyHandler(e)}/>
          Available
          </label>
        </div>
        </details>
      <button className='filter-apply-btn' type='submit' >Apply</button>
      </div>
     </form >
    </>
  )
}

export function EmptyElement({children}){
  return(
    <>
    <div className='invalid-element'>{children}</div>
    </>
  )
}