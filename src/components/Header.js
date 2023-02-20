import logo from '../logo.svg';

function Header() {
  return (
    <header className='App-header'>
      <div id='logo'>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
      <p id='title'>25 + 5 Clock Project</p>
    </header>
  );
}

export default Header;
