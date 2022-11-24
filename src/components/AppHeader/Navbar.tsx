import React from 'react';
import { pages } from '../../app-constants';
import '../../App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";

export interface NavbarProps {
    changePage(newPage: number): void;
}
export const Navbar: React.FC<NavbarProps> = ({
    changePage,
}) => {

    const handlePageChange = (page: string) => {
        // Think about a better way to do that:
        switch (page) {
            case 'Choose':
                changePage(0);
                break;
            case 'Rec':
                changePage(1);
                break;
            case 'Play':
                changePage(2);
                break;
            case 'Edit':
                changePage(2);
                break;
            default:
                break;
        }
    }

    return (
            // <nav className='nav-tab'>
            //   <ul>
            //     <li>
            //       <Link to="../home-page/">Home</Link>
            //     </li>
            //   </ul>
            // </nav>
            <></>
          );
}