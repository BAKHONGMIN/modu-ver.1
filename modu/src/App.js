import './App.css';
import Nav from './Nav';
import Carousel from './Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import Gallery from'./Gallery';
import Instagram  from './Instagram';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Carousel></Carousel>
      <Gallery propid="gallery" proptitle="갤러리" propfolder="img"></Gallery>
      <Instagram propid="Instagram" proptitle="@modetournetwork" propfolder="instagram"></Instagram>
    </div>
  );
}

export default App;
