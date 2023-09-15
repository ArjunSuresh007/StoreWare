import {createStore} from 'redux'
import data from './warehouse.json'

let filter_params = {
    status:false,
    value:null
}

let search_params = {
    status:false,
    value:''
}
let storeHandler = (state={data,search_params,filter_params},action)=>{

    switch(action.type){
        case 'UPDATE':
            let {id} = action.payload
            data[id-1] = action.payload
            return state
        case 'SEARCH':
            return {
                ...state,
                search_params:{...search_params,status : true,value:action.payload}
            }
        case 'SEARCH-RESET':
            return {
                ...state,
                search_params:{...search_params,status:false,value:''}
            }
        case 'FILTER':
            return {
                ...state,
                filter_params:{
                    status:true,
                    value:action.payload
                }
            }
        case 'FILTER-RESET':
                return {
                    ...state,
                    filter_params:{
                        status:false,
                        value:null
                    }
                }
        default:
            return state;
    }
}

let store = createStore(storeHandler)

export default store