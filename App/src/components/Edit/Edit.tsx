import React, { useState, useEffect } from 'react';

import '../../App.css';


export interface EditProps {
    ChangePage: (newPage: number) => void;
}

export const Edit: React.FC<EditProps> = ({
    ChangePage
}) => {

    return (
    <>
        <button className='home-button' onClick={() => ChangePage(0)}>go home</button>
        <h1> Edit✂️</h1>
    </>
    );
}
