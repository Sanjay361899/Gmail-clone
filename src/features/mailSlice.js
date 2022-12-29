import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectMail:null,
 sendMessageIsOpen: false,
}

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    openSelectMail:(state, action)=>{
      state.selectMail=action.payload
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen=true
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen=false
    }, 
    
  },
})

// Action creators are generated for each case reducer function
export const {openSendMessage,closeSendMessage, openSelectMail}  = mailSlice.actions
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen 
export const selectSelectMail=(state)=>state.mail.selectMail
export default mailSlice.reducer
console.log(selectSendMessageIsOpen,"selectSendMessageIsOpenselectSendMessageIsOpen")