import './App.css';
import image from './am2.png';
import Timm from './1stbrm';
// import {Theclass} from './2ndbrm';
// import {Meet} from './3rdbrm';

function App() {
  return (
    <div className="App">
      <Timm
        product2='shoe'
        price2='$50'
        product='trouser'
        price='$220'
        product3='school bag'
        price3='$150'
      />
      <imag/>
      {/* <Theclass/>
      <Meet/> */}
    </div>
  );
}

export default App;
