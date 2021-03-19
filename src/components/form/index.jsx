import './form.scss';

const Form = () => {
  return (
    <div className='container mx-auto form row shadow mb-5'>
      <div className='col-md-6'>
        <div className='input name'>
          <div>
            <label htmlFor="name">Full name</label>
          </div>
          <input id='name' type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        </div>
        <div className='input contact'>
          <div><label htmlFor="contact">Contact number</label></div>
          <input id='contact' type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        </div>
        <div className='input email'>
          <div><label htmlFor="email">Email</label></div>
          <input id='email' type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        </div>
        <button type="button" className="btn btn-primary">Send Email</button>
      </div>
    </div>
  );
}

export default Form;