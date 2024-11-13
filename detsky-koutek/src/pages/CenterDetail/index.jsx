import './style.css'

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const CenterDetail = () => {
    const {centerId} = useParams();
    
    const [detail, setDetail] = useState([])

    useEffect(() => {
        const fetchDetials = async () => {
          const response = await fetch(`http://localhost:4000/api/centers/${centerId}`);
          const data = await response.json();
          setDetail(data.data);
        };
        fetchDetials();
      },[centerId]);

    return (
<div className='container-detail'>
<h3 className='detail-name'>{detail.name}</h3>
    <div className='detail-top'>
    <div className='detail-left'>
    <h4>Adresa:</h4>
    <p>{detail.address}</p>
    <h4>Kapacita:</h4> <p>{detail.capacity}</p>
    </div>
    <div className='detail-right'>
        <h4>Otevírací doba: </h4>
        <ul className='list'>
            {detail.open? (
            <>
            <li>Pondělí: {detail.open.mon || 'Zavřeno'}</li>
            <li>Úterý: {detail.open.tue || 'Zavřeno'}</li>
            <li>Středa: {detail.open.wed || 'Zavřeno'}</li>
            <li>Čtvrtek: {detail.open.thu || 'Zavřeno'}</li>
            <li>Pátek: {detail.open.fri || 'Zavřeno'}</li>
            <li>Sobota: {detail.open.sat || 'Zavřeno'}</li>
            <li>Neděle: {detail.open.sun || 'Zavřeno'}</li>
            </>
            ) : (
            <li>...</li>
            )}
        </ul>
    </div> 
    </div> 
    <div className='description'>
    <h4 >Popis:</h4> <p>{detail.info}</p>
    </div>  
</div>
    )
}