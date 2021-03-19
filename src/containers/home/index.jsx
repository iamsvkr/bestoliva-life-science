import Nav from "../../components/nav"
import Carousel from '../../components/carousel';
import './home.scss';
import Footer from "../../components/footer";
import AboutUs from '../../components/about-us';

const Home = () => {
  return (
    <div className='Home'>
      <Nav />
      <Carousel />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default Home;