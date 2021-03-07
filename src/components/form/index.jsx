import './form.scss';

const Form = () => {
  return (
    <div className='container mx-auto form row shadow'>
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
  );
}

export default Form;