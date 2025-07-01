import logo from './logo.svg';
function Header(){
    return (
    <div className='nav-bar'>
        <img src={logo} width="60px"/>
        <nav>
          <ul className='nav-list'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        
    </div>
    )
}
export default Header