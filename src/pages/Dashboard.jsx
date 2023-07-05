import React from 'react';
import BaseContainer from '../components/BaseContainer.jsx';

function Hi () {
	return (<h1>Hi NET!</h1>);
}

function Dashboard() {
	return (
		<>
			<BaseContainer
				component={<Hi />}
			/>
		</>
	);
}

export default Dashboard;
