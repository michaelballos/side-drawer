import React from 'react';
import BackArrowButton from './BackArrowButton';
import ExitButton from './ExitButton';
import './SideDrawer.scss';

export default function TopBar() {
  return (
    <div className='topBar'>
      <BackArrowButton />
    </div>
  )
}