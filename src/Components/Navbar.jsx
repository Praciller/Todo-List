import logo from './../logo.svg';

const Navbar = ({ isDarkMode }) => {
  return (
    <div className={`navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <ul>
        <li>
          <img src={logo} alt="Logo" style={{ width: 120 }} />
        </li>
        <li>
          <h1>TaskMaster</h1>
          <p>Master Your Day with TaskMaster.</p>
        </li>
      </ul>
    </div>
  );
}
 
export default Navbar;