import React from 'react'
import { useSelector} from 'react-redux'
import { CardComponent, FilterCompoenent, SearchComponent,EmptyElement } from './Whole_Components'

function Main() {
  let data = useSelector(state=>state.data)
  let search = useSelector(state=>state.search_params)
  let filter = useSelector(state=>state.filter_params)
  let search_data = data.filter(item=>item.name === search.value)
  let end_data = []


  function space_function(value,state){
    if(arguments.length === 1){
      let filterData = [data[0]];
      if (value['space'] === 10000){
        filterData = data.filter(item=>item.space_available > value['space'])
      }
      else{
        filterData = data.filter(item=>item.space_available < value['space'])
      }
      return filterData
    }else{
      if (value['space'] === 10000){
        state = state.filter(item=>item.space_available > value['space'])
      }
      else{
        state = state.filter(item=>item.space_available < value['space'])
      }
      return state
    }
  }

  function availability(state){
    if(arguments.length === 1){
      state = state.filter(item=>item.is_live === true)
            return state
    }else{
      let data_values = data.filter(item=>item.is_live === true)
      return data_values
    }
  }

  function filter_items(value){
    let args = Object.keys(value)
    let filter_data = [...data]
    switch(args.length){
      case 1:
        if (args[0] === 'space'){
          return space_function(value)
        }else if (args[0] === 'is_alive'){
          return availability()
        }else{
          let data_values = data.filter(item=>value[args[0]].includes(item[args[0]]))
          return data_values
        }

      default:
        for(let x of  args){
          if (x === 'space'){
            filter_data = space_function(value,filter_data)
          }else if (x === 'is_alive'){
            filter_data = availability(filter_data)
          }
          else{
            filter_data = filter_data.filter(item=>value[x].includes(item[x]))
          }
        }
        return filter_data
    }
  }

  function returnDataHandler(func,param){
    let data = func(param)
    end_data = data
    return end_data
  }

  return (
    <>
    <FilterCompoenent/>
    { search.status || filter.status ? 
          search.status === true ? 
          search_data.length === 1 ? 
    <SearchComponent data={search_data[0]}  /> : <EmptyElement>Element not available</EmptyElement>
    : (
      returnDataHandler(filter_items,filter.value),
      end_data  ?  end_data.length  === 0 ? <EmptyElement>No Element are Found</EmptyElement> : end_data.map(item=>(
        <>
        <CardComponent item={item} key={item.name}/>
        </>
      )): <EmptyElement>Element not available</EmptyElement>
      
    )
      : 
      data.map(item=>{
        return(
          <>
          <CardComponent item={item} key={item.name}/>
      </>
        )
      })
      }</>
  )
}

export default Main