import './App.css';
import { Mainnavi } from './mainnavi.js';
import { Outlet } from 'react-router-dom';
export const Rootlay=function() {
    return (
        <>
            <Mainnavi />
            <Outlet />
        </>
    )
}