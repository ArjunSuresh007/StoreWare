import './App.css';
import LayoutContainer from './components/Layout';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Main from './components/Main';
import EditForm from './components/EditForm';



function App() {
  return (
    <>
    <div className="App">
        <Router>
        <Routes>
          <Route path='/' element={<LayoutContainer/>}>
            <Route index element={<Main/>}/>
            <Route path='warehouse/:id' element={<EditForm/>}/>
          </Route>
        </Routes>
        </Router>
    </div>
    </>
  );
}

export default App;
