import './nav.scss';

const Nav = () => {
  return (
    <div className='Nav'>
      <div className='left'>
        <h2>BLS</h2>
      </div>
      <div className='right'>
        <div className="about">
          About us
        </div>
        <div className="contact">
          Contact us
        </div>
      </div>
    </div>
  );
}

export default Nav;