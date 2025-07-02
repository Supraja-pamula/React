import employees from './employeeData';
import { Employee } from './Employee';
import './App.css';
function App() {
  let employeeElements=employees.map((employee)=>{
    return <Employee employee={employee}/>
  })
  return(
    <div>
      <h1 className='headline-text'>Employee Cards</h1>
      <div className='employee-cards-container'>
        {employeeElements}
      </div>
    </div>
  )
}

export default App;
