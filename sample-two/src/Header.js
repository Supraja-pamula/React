import logo from './image.png';
function Header(){
    return (
    <div className='nav-bar'>
        <img src={logo} width="60px"/>
        <span>My Travel journal</span>    
    </div>
    )
}
export default Header