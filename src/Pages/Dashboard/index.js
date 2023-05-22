import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

export const Dashboard = () => {
  return (
    <div className='scrollable-div' >
        <Header/>
         <Outlet/>
    </div>
  )
}
