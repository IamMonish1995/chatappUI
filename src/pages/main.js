import React from 'react'
import PrimarySearchAppBar from '../components/appbar'
import Chatroom from '../components/chatroom'
import Userlist from '../components/userlist'


export default function Main({signout}) {

    return (
    <>
    {/* app header */}
    <PrimarySearchAppBar/>
    {/* user list */}
    <Userlist/>

    {/* chatroom */}
    <Chatroom/>
    
    </>
  )
}
