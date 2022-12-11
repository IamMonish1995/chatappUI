import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import SendIcon from '@mui/icons-material/Send';

export default function UserList({chatRooms ,handleOpenChatRoom }) {
  
  return (
    <List dense sx={{ width: '100%', maxWidth: "100%"}}>
      {chatRooms.map((item , index) => {
        return (
          <ListItem
            onClick={()=>{handleOpenChatRoom(item)}}
            key={item.id}
            secondaryAction={
              <SendIcon
                edge="end"
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={item.user.name}
                  src={item.user.photo}
                />
              </ListItemAvatar>
              <ListItemText id={item.id} primary={item.user.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}