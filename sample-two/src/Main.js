
// import cat1 from './images/cat1.png';
// import cat2 from './images/cat2.png';
// import cat3 from './images/cat3.png';
// import cat4 from './images/cat4.png';
import phn from './images/phn.png';
import mail from './images/mail.png'
export default function Main(props){
    console.log(props)
    return <div>
       <div className="user-details-card">
         <img src={props.img} className="user-img"/>
         <h3>{props.name}</h3>
         <div className="detail">
            <img src={phn} className="contact-img"/>
            <span>{props.phn}</span>
        </div>
        <div className="detail">
            <img src={mail} className="contact-img"/>
            <span>{props.mail}</span>
         </div>
       </div>
    </div>
}