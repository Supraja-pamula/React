import logo from './logo.svg';
function Header(){
    return (
    <div className='nav-bar'>
        <img src={logo} width="60px"/>
        <span>ReactFacts</span>
    </div>
    )
}
export default Header