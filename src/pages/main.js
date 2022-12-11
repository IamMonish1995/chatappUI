import React, { useState ,useEffect } from 'react'
import PrimarySearchAppBar from '../components/appbar'
import Chatroom from '../components/chatroom'
import Userlist from '../components/userlist'
import { getChatRoomByUserID } from '../service/chatRoomRequest'
import { getUserID } from '../utility/store'


export default function Main({signout}) {
  let userID = getUserID();
  const [chatRooms , setChatRooms]=useState([])
  
  
  useEffect(() => {
    getChatRoomByUserID({userID:userID}).then((res)=>{
    let userListAPI  = res?.value.userList;
    let  FinalchatRooms = res?.value.chatrooms;
    
    FinalchatRooms.map((chatroom , index)=>{
      let user;      
      user =  userListAPI.find(function(user, index) {
        if(chatroom.userAID == userID){
          if(user.id == chatroom?.userBID  ){
            return true;
          }
        }else{
          if(user.id == chatroom?.userAID  ){
            return true;
          }
        }
    });
    FinalchatRooms[index] = {...chatroom, user};
    })
      setChatRooms(FinalchatRooms)
    })
  }, [])
  

  
    return (
    <>
    {/* app header */}
    <PrimarySearchAppBar/>
    {/* user list */}
    <Userlist chatRooms={chatRooms}/>

    {/* chatroom */}
    <Chatroom/>
    
    </>
  )
}
