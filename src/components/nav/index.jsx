import './nav.scss';
import { Link, useHistory } from 'react-router-dom';
import logo from './logo.jpeg';

const Nav = () => {

  const history = useHistory();

  return (
    <div className='Nav shadow bg-white rounded'>
      <div className='left pl-4' onClick={() => history.push('/')}>
        <img src={logo} alt="logo" height='80px'/>
      </div>
      <div className='right pt-4 pr-4'>
        <div className="about">
        <Link to='/'>About us</Link>
        </div>
        <div className="contact">
          <Link to='/contact'>Contact us</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;