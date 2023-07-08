import React from 'react';
import { Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
  const { logout } = useAuth0();

  const logoutClick = () => {
    logout({ logoutParams: { returnTo:"https://prod--im-danielguerrero.netlify.app/" } });
  }

  return (
    <Button onClick={logoutClick}>
      Log Out
    </Button>
  );
}

export default LogoutButton;
