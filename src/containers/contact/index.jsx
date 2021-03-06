import Nav from "../../components/nav"
import './contact.scss';

const Contact = () => {
  return (
    <div>
      <Nav />
      <div className="Contact">
        <div className='card shadow p-3 mb-5 bg-white rounded' style={{width: '20rem'}}>
          <div class="card-body">
            <h1>Contact us</h1>
          </div>
        </div>
        <h3 style={{color: '#005aa5'}}>Registered Office</h3>
        <br />
        <h4>Bestoliva Life Sciences</h4>
        <div className='address'>
          <p style={{fontWeight: '700', paddingRight: '2rem'}}>Address</p>
          <p>Address</p>
        </div>
        <div className='form row'>
          <div className='col-md-6'>
            <div className='input name'>
              <div>
                <label htmlFor="name">Full name</label>
              </div>
              <input id='name' type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            </div>
            <div className='input contact'>
              <div><label htmlFor="contact">Contact number</label></div>
              <input id='contact' type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            </div>
            <div className='input email'>
              <div><label htmlFor="email">Email</label></div>
              <input id='email' type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            </div>
            <button type="button" class="btn btn-primary">Send Email</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;