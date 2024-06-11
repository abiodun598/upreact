import './App.css';
import { Link } from "react-router-dom";
export function Mainnavi() {
    return (
        <>
            <div className="bar">
                <li><Link to='/'>home</Link></li>
                <li><Link to='/form'>read more</Link></li>
            </div>
        </>
    )
}