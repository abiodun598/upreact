import './App.css';
import Timm from './1stbrm';
import Course from './2ndbrm';
import mmm from './power.jpg';
import shoe from './shoe.jpg';
import bag from './bag.jpg';



function App() {
  const productDetail = {
    name: ['power bank', 'bag', 'shoe'],
    price: [25000, 26000, 15000],
    description: ['5000MAH', 'lether product', 'with skin'],
    image: [mmm, bag, shoe],
  }
  return (
    <div className="App">
      <Timm />
      <div className="sub">
        {productDetail.name.map((x, bb) => (
          <div key={bb}>
            <Course
              name={productDetail.name[bb]}
              price={productDetail.price[bb]}
              description={productDetail.description[bb]}
              image={productDetail.image[bb]}/>
          </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
