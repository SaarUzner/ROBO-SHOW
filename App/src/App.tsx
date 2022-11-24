import React from 'react';
import './App.css';
import { Header } from './components/AppHeader/Header';
import { PageLayout } from './components/PageLayout';


function App() {
  const [page, setPage] = React.useState<number>(0);
  
  const changePage = (newPage: number) => {
    setPage(newPage);
  }
  
  return (
    <div className="root">
      <Header changePage={changePage}/>
      <PageLayout page={page} ChangePage={changePage}/>
    </div>
  );
}

export default App;
