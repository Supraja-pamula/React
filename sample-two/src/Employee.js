export function Employee(props){
    console.log(props)
    return (
        <div className="employeeCard">
            <div>
               <img src={props.employee.image}/>
               <h2>{props.employee.name}</h2>
            </div>
            <div className="employeeDetails">
               {/* <h3>Employee Details</h3> */}
               <span><i>EmailID:</i> <br/>{props.employee.email}</span>
               <p><i>Department:<br/> </i>{props.employee.department}</p>
               <p><i>Position: </i><br/> {props.employee.position}</p>
            </div>
        </div>
    )
}