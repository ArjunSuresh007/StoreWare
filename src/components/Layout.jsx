import { Outlet } from 'react-router-dom'
import '../Styles/layout.css'
import Header from './Header'


function LayoutContainer() {
  return (
    <div className='container'>
    <header className="header">
      <Header/>
    </header>
    <main className="main-component">
      <div className='data-container'>
      {<Outlet/>}
      </div>
    </main>
    </div >
  )
}

export default LayoutContainer