
import './App.css';

function Timm(props) {
  const name= 'tunji';
  const newname= [...name];
  console.log(newname)
  return (
    <div className="heme">
        <div>
          <h3><strong>product:</strong> {props.product2}</h3>
          <h3><strong>price:</strong> {props.price2}</h3>
          <button>Add to cart</button>
        </div>
        <div>
            <h3><strong>product:</strong> {props.product}</h3>
            <h3><strong>price:</strong> {props.price}</h3>
          <button>Add to cart</button>
        </div>
        
        <div>
            <h3><strong>product:</strong> {props.product3}</h3>
            <h3><strong>price:</strong> {props.price3}</h3>
          <button>Add to cart</button>
        </div>
    </div>
    
  );
}

export default Timm;
