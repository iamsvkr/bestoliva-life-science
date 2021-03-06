import Nav from "../../components/nav"
import Carousel from '../../components/carousel';
import './home.scss';

const Home = () => {
  return (
    <div className='Home'>
      <Nav />
      <Carousel />
    </div>
  );
}

export default Home;