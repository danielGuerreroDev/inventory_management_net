import React, { Suspense } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const BaseContainer = React.lazy(() => import('../components/BaseContainer.jsx'));

function Hi() {
  return (<h1>Hello! Consult the products from the side menu.</h1>);
}

function Dashboard() {
  return (
    <>
      <Suspense fallback={ <LinearProgress /> }>
        <BaseContainer
          component={<Hi />}
        />
      </Suspense>
    </>
  );
}

export default Dashboard;
