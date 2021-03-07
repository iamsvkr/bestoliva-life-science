import Nav from "../../components/nav"
import Carousel from '../../components/carousel';
import './home.scss';
import Footer from "../../components/footer";

const Home = () => {
  return (
    <div className='Home'>
      <Nav />
      <Carousel />
      <Footer />
    </div>
  );
}

export default Home;