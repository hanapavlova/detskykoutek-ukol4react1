import './style.css'
import { useState, useEffect } from "react";
import { Link, Outlet } from 'react-router-dom';



export const CentersPage = () => {

const [center, setCenter] = useState([])

useEffect(() => {
    const fetchCenters = async () => {
      const response = await fetch('http://localhost:4000/api/centers');
      const data = await response.json();
      setCenter(data.data);
    };
    fetchCenters();
  },[]);


return (
    <div>
        <h2>Naše pobočky</h2>
        <nav className='centre-container'>
        {center.map((item) => (
                <Link className='center-link' key={item.id} to={`/pobocky/${item.id}`}>
                <p>{item.name}</p>
                <p>{item.address}</p>
                </Link>
        ))}
        </nav>
 <Outlet />
 </div>
)}