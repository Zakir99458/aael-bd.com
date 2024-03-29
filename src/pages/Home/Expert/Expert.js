import React from 'react';

const Expert = ({expert}) => {
    const {name, designation, img} = expert;
    return (
        <div className='col-lg-4 col-sm-6 col-12'>
            <img src= {img} alt="" />
            <h2>{name}</h2>
            <h5 className='text-danger'>{designation}</h5>
            

        </div>
    );
};

export default Expert;