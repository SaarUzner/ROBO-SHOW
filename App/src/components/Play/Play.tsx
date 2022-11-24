import React, { useState, useEffect } from 'react';

import '../../App.css';


export interface PlayProps {
    ChangePage: (newPage: number) => void;
}

export const Play: React.FC<PlayProps> = ({
    ChangePage
}) => {

    return (
    <>
        <button className='home-button' onClick={() => ChangePage(0)}>go home</button>
        <h1> Play🎵</h1>
        <h1 className='sub-header'> Please choose recording to play </h1>
    </>
    );
}
