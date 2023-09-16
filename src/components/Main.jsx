import React from 'react'
import { useSelector} from 'react-redux'
import { CardComponent, FilterCompoenent, SearchComponent,EmptyElement, FilterElementsComponent } from './Whole_Components'

function Main() {
  let data = useSelector(state=>state.data)
  let search = useSelector(state=>state.search_params)
  let filter = useSelector(state=>state.filter_params)
  let search_data = data.filter(item=>item.name === search.value)

  return (
    <>
    <FilterCompoenent/>
    { search.status || filter.status ? 
                      search.status === true ? 
                        search_data.length === 1 ? 
                          <SearchComponent data={search_data[0]}  /> : <EmptyElement>Element not available</EmptyElement>
                          : <FilterElementsComponent filter_parameters={filter.value}/>
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