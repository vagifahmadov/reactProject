import React from 'react';
import RouterView from '../RouterView';
import Menu from '../Menu/Menu';


const Container = () => {
  return (
    <div className='container'>
      <Menu />
      <RouterView />
    </div>
  )
}

export default Container