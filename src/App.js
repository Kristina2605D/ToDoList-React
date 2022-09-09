import {BrowserRouter,Route,Routes} from 'react-router-dom';
import ToDoList from './Hooks/ToDoList';
import  Componentss  from "./Component";

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route  path = '/' element ={<Componentss/>}/>
     <Route path ='/ToDoList' element={<ToDoList/>} />
     </Routes> 
      </BrowserRouter>
  )
}

export default App
