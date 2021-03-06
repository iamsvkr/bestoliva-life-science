import './nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='Nav shadow p-3 mb-5 bg-white rounded'>
      <div className='left'>
        <h2>BLS</h2>
      </div>
      <div className='right'>
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