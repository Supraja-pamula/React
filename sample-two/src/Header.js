import logo from './images/chefLogo.png';
function Header(){
    return (
        <div className='header'>
            <img src={logo} width="60px"/>
            <span>Chef Claude</span>
        </div>
    )
}
export default Header