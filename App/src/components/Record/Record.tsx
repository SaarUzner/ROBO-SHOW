import React, { useState, useEffect } from 'react';

import '../../App.css';


export interface RecordProps {
    ChangePage: (newPage: number) => void;
}

export const Record: React.FC<RecordProps> = ({
    ChangePage
}) => {
    return (
    <>
        <button className='home-button' onClick={() => ChangePage(0)}>go home</button>
        <h1> Record🎤</h1>
        <div className="RecApp">
            <button className='recordButton' onClick={() => ChangePage(2.1)}> Audio🎺</button>
            <button className='recordButton'onClick={() => ChangePage(0)}> Eyes👀</button>
            <button className='recordButton'onClick={() => ChangePage(0)}> Mouth👄</button>
            <button className='recordButton'onClick={() => ChangePage(0)}> Eyebrows🥸 </button>
        </div>

    </>
    );
}
