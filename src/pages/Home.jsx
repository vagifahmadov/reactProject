import React from 'react';
import NewRequest from '../components/NewRequest/newRequest';
import DataTables from './antComponents/requestTables/DataTables';

function Home() {
  return (
    <div>
      <NewRequest />
      <DataTables />
    </div>
  )
}

export default Home;