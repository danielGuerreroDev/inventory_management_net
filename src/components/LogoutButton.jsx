import React from 'react';
import { Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { frontend_url } from '../urls';

function LogoutButton() {
  const { logout } = useAuth0();

  const logoutClick = () => {
    logout({ logoutParams: { returnTo: frontend_url } });
  }

  return (
    <Button onClick={logoutClick}>
      Log Out
    </Button>
  );
}

export default LogoutButton;
