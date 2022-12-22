import React from 'react'
import './SideBar.css'
import { Button } from '@mui/material'
import { Add, Inbox } from '@mui/icons-material'
import SidebarOption from './SidebarOption'
const SideBar = () => {
  return (
    <div className='sidebar'>
        <Button startIcon={<Add fontSize="large"/>} className="sidebar__compose">Compose</Button>
    <SidebarOption Icon={Inbox} title="Inbox" number={54}/>
    
    </div>
  )
}

export default SideBar