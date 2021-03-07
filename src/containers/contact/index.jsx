import Footer from "../../components/footer";
import Form from "../../components/form";
import Nav from "../../components/nav"
import './contact.scss';

const Contact = () => {
  return (
    <div>
      <Nav />
      <div className="Contact container">
        <div className='card my-5 shadow rounded' style={{width: '20rem'}}>
          <div class="card-body">
            <h1>Contact us</h1>
          </div>
        </div>
        <h4 className='text-primary'><strong>Registered Office</strong></h4>
        <hr/>
        <h4 className='text-success'>Bestoliva Life Sciences</h4>
        <div className='address mt-3'>
          <p style={{fontWeight: '700', paddingRight: '2rem'}}>Address:</p>
          <p>3325, kaccha bazar, Ambala Cantt, Haryana, 133001, India</p>
        </div>
      </div>
      <Form />
      <Footer />
    </div>
  );
}

export default Contact;