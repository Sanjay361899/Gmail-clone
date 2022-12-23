import React from 'react'
import './Mail.css'
import { IconButton } from '@mui/material'
import { ArrowBack, CheckCircle, Delete, Download, Email, Error, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
function Mail() {
  const navigate=useNavigate();
  return (
  <div className="mail">
    <div className="mail__tools">
      <div className="mail__toolsLeft">
      <IconButton onClick={()=>navigate('/')}><ArrowBack/></IconButton>
      <IconButton><MoveToInbox/></IconButton>
      <IconButton><Error/></IconButton>
      <IconButton><Delete/></IconButton>
      <IconButton><Email/></IconButton>
      <IconButton><WatchLater/></IconButton>
      <IconButton><CheckCircle/></IconButton>
      <IconButton><LabelImportant/></IconButton>
      <IconButton><MoreVert/></IconButton>
      </div>
      <div className="mail__toolsRight">
         <IconButton>
          <UnfoldMore/>
         </IconButton>
         <IconButton>
          <Print/>
         </IconButton>
         <IconButton>
          <Download/>
         </IconButton>
      </div>
    </div>
  </div>      
  )
}

export default Mail
