import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import SendIcon from '@mui/icons-material/Send';

export default function UserList({chatRooms}) {
  
  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {chatRooms.map((item , index) => {
        console.log(item)
        return (
          <ListItem
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