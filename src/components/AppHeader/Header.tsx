import React from 'react';
// import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Navbar } from './Navbar';

export interface HeaderProps {
    changePage(newPage: number): void;
}
export const Header: React.FC<HeaderProps> = ({
    changePage,
}) => {
      
    return (
        <div className='header-container'>
            {/* <h1 className='app-header'> Please choose your audio wish!</h1> */}
            <Navbar changePage={changePage}/>
        </div>
    )
}