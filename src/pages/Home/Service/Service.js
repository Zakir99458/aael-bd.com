import React from 'react';
import './Service.css';

const Service = (props) => {
    const {name, price, description, img} = props.service;

    return (
        <div className='service-container'>
            
            <img src={img}></img>
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className='px-5'>{description}</p>
        </div>
    );
};

export default Service;