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
            <h1 className='neon-text'>ROBO SHOW</h1>
            <h1 className='app-header'> Please choose your audio preference</h1>
            <br></br>
            <button className="button1" onClick={() => ChangePage(1)}> Play🎵 </button>
            <button className="button2" onClick={() => ChangePage(2)}> Record🎤 </button>
            <button className="button3" onClick={() => ChangePage(3)}> Edit✂️ </button>
        </>
    );
}
