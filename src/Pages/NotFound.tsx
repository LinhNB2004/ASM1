import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
const NotFound = () => {
	return (
		<div>
			<Container>
				<h1>404 NOTFOUND</h1>
				<Link to="/">GO TO BACK HOME</Link>
			</Container>
		</div>
	);
};

export default NotFound;
