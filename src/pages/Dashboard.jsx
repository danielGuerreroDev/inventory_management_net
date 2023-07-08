import React, { Suspense } from 'react';

const BaseContainer = React.lazy(() => import('../components/BaseContainer.jsx'));

function Hi () {
	return (<h1>Hi NET!</h1>);
}

function Dashboard() {
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<BaseContainer
					component={<Hi />}
				/>
			</Suspense>
		</>
	);
}

export default Dashboard;
