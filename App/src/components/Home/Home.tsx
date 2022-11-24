import React, { useState, useEffect } from 'react';

import '../../App.css';

export interface HomeProps {
    ChangePage: (newPage: number) => void;
}

export const Home: React.FC<HomeProps> = ({
    ChangePage,
}) => {
    return (
        <>
            <h1>ROBO SHOW</h1>
            <h1 className='sub-header'> Please choose your audio preference</h1>
            <br></br>
            <button onClick={() => ChangePage(1)}> Play🎵 </button>
            <button onClick={() => ChangePage(2)}> Record🎤 </button>
            <button onClick={() => ChangePage(3)}> Edit✂️ </button>
        </>
    );
}
