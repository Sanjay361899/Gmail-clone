import React, { useEffect, useState } from 'react'
import './EmailList.css'
import { Checkbox, IconButton } from '@mui/material'
import { ArrowDropDown, ChevronLeft, ChevronRight, EmailSharp, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings, SettingsSystemDaydreamOutlined } from '@mui/icons-material'
import Section from './Section'
import EmailRow from './EmailRow'
import { db } from './firebase'
const EmailList = () => {
    const [email,setEmail]=useState([])
    useEffect(()=>{
        db.collection('email').orderBy('timestamp','desc').onSnapshot(snapshot=>setEmail(snapshot.docs.map((doc)=>({
            id:doc.id,
            data:doc.data(),
        }))))
    
    })
  return (
  <div className="emailList">
    <div className="emailList__settings">
        <div className="emailList__settingsLeft">
           <Checkbox/>
            <IconButton>
                <ArrowDropDown/>
            </IconButton>
            <IconButton>
                <Redo/>
            </IconButton>
            <IconButton>
                <MoreVert/>
            </IconButton>
        </div>
        <div className="emailList__settingsRight">
        <IconButton>
                <ChevronLeft/>
            </IconButton>
            <IconButton>
                <ChevronRight/>
            </IconButton>
            <IconButton>
                <KeyboardHide/>
            </IconButton>
            <IconButton>
                <Settings/>
            </IconButton>
        </div>
    </div>
    <div className="emailList__section">
        <Section Icon={Inbox} title='primary' color="red" selected/>
        <Section Icon={People} title='Social' color="#1A73E8" />
        <Section Icon={LocalOffer} title='Promotions' color="green" />
    </div>
     <div className="emailList__list">
        {email.map(({id,data:{to, subject,message, timestamp}})=>(
            <EmailRow
            id={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toLocaleTimeString() }
            />
        ))}
        <EmailRow
        title="Twitch@gmail.com"
        subject="Hey Fellow Streamer!!!"
        description="This is a test"
        time="10pm"
        />
             <EmailRow
        title="Twitch@gmail.com"
        subject="Hey Fellow Streamer!!!"
        description="This is a test This is a test This is a test This is a test "
        time="10pm"
        />
    </div>
  </div>
    )
}

export default EmailList