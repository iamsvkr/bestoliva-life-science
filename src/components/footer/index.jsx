import './footer.scss';

const Footer = () => {
  return (
    <footer className="Footer page-footer text-white font-small pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5>Contact us at - <span>(+91) 9802303036</span> </h5>
          </div>
          <hr className="clearfix w-100 d-md-none pb-3" />
          <div className="col-md-3 mb-md-0 mb-3">
          {/* <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul> */}
        </div>
        <div className="col-md-3 mb-md-0 mb-3">
          {/* <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul> */}

        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
      <a href="#"> Bestoliva Life Sciences</a>
    </div>

    </footer>
  );
}

export default Footer;