import './App.css';
import { Timm } from './1stbrm';
import { Course } from './secondbrm';
// import { Greet } from './secondbrm';
import { Form } from './form';
import mmm from './power.jpg';
import shoe from './shoe.jpg';
import bag from './bag.jpg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Rootlay } from './rootlay';
import Errorpage from './errorpage'
function App() {
  const productDetail = {
    name: ['Power bank', 'Bag', 'Canvas'],
    price: [25000, 26000, 15000],
    description: ['5000mAh new-age', 'High quality materials', 'Trending fashion shoes'],
    image: [mmm, bag, shoe],
  }
  const mypage =
    <div className="App">
      <Timm />
      <div className="sub">
        {productDetail.name.map((x, bb) => (
          <div key={bb}>
            <Course
              name={productDetail.name[bb]}
              price={productDetail.price[bb]}
              description={productDetail.description[bb]}
              image={productDetail.image[bb]} />
          </div>
        ))
        }
      </div>
    </div>
  const root = createBrowserRouter([
    {
      path: '',
      element: <Rootlay />,
      errorElement: <Errorpage />,
      children: [
        {
          path: '/',
          element: mypage
        },
        {
          path: '/class',
          element: <Form />
        },
      ]

    }

  ])

  // const flame = true;
  return (
    <>
      {/* <div className="App">

        <div className="sub">
        {productDetail.name.map((x, bb) => (
          <div key={bb}>
            <Course
              name={productDetail.name[bb]}
              price={productDetail.price[bb]}
              description={productDetail.description[bb]}
              image={productDetail.image[bb]} />
          </div>
        ))
        }
      </div>
      </div> */}
      <RouterProvider router={root} />
      {/* <Greet bola={flame} /> */}
    </>
  );
}

export default App;
