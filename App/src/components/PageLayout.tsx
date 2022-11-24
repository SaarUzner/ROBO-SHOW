import React from 'react';
import '../App.css';
import { Record } from './Record/Record';
import { RecordAudio } from './Record/RecordAudio';
import { Play } from './Play/Play';
import { Home } from './Home/Home';
import { Edit } from './Edit/Edit';

export interface PageLayoutProps {
    page: number;
    ChangePage: (newPage: number) => void;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
    page,
    ChangePage,
}) => {
    switch (page) {
        case 0:
            return <Home ChangePage={ChangePage} />
        case 1:
            return <Play ChangePage={ChangePage} />
        case 2:
            return <Record ChangePage={ChangePage} />
        case 2.1:
            return <RecordAudio ChangePage={ChangePage} />
        case 3:
            return <Edit ChangePage={ChangePage} />
        default:
            return null;


    }
}