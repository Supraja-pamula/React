import { Fragment } from "react/jsx-runtime";
import {cat1} from './images/cat1.png';
export function Main(){
    return <Fragment>
       <div>
         <img src={cat1}/>
         <h3>Mr.WhiskirSon</h3>
         <div>
            <img src="./images/phn.png"/>
            <span>(212)555-1234</span>
            <img src="./images/mail.png"/>
            <span>mr.whiskirson@catnap.meow</span>
         </div>
       </div>
    </Fragment>
}