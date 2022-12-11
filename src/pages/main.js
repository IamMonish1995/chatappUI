import React, { useState, useEffect } from "react";
import PrimarySearchAppBar from "../components/appbar";
import Chatroom from "../components/chatroom";
import Userlist from "../components/userlist";
import { getChatRoomByUserID } from "../service/chatRoomRequest";
import { getUserID } from "../utility/store";

export default function Main({ signout }) {
  let userID = getUserID();
  const [chatRooms, setChatRooms] = useState([]);
  const [chatRoomData, setChatRoomData] = useState(null);
  const [openChatRoom, setOpenChatRoom] = useState(false);

  useEffect(() => {
    getChatRoomByUserID({ userID: userID }).then((res) => {
      let userListAPI = res?.value.userList;
      let FinalchatRooms = res?.value.chatrooms;

      FinalchatRooms.map((chatroom, index) => {
        let user;
        user = userListAPI.find(function (user, index) {
          if (chatroom.userAID == userID) {
            if (user.id == chatroom?.userBID) {
              return true;
            }
          } else {
            if (user.id == chatroom?.userAID) {
              return true;
            }
          }
        });
        FinalchatRooms[index] = { ...chatroom, user };
      });
      setChatRooms(FinalchatRooms);
    });
  }, []);

  const handleOpenChatRoom = (chatRoomData) => {
    setChatRoomData(chatRoomData);
    setOpenChatRoom(true);
  };
  const handleCloseChatRoom = () => {
    setChatRoomData(null);
    setOpenChatRoom(false);
  };

  return (
    <>
      {/* app header */}
      {!openChatRoom && <PrimarySearchAppBar />}

      {/* user list */}
      {!openChatRoom && (
        <Userlist
          handleOpenChatRoom={handleOpenChatRoom}
          chatRooms={chatRooms}
        />
      )}
      {/* chatroom */}
      {openChatRoom && <Chatroom  handleCloseChatRoom={handleCloseChatRoom} chatRoomData={chatRoomData} />}
    </>
  );
}
