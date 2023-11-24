import React from 'react';
import ReserveForm from './ReserveForm';
import dates from './calendar.json'
import times from './times.json'


export default function ReservePage() {
  const dateData = dates
  const timeData = times

  return (
    <div className='reservePage' id='reserve'>
      <ReserveForm dateData={dateData} timeData={timeData}/>
    </div>
  )
}