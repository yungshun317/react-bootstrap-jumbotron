import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Toast from "react-bootstrap/Toast";
import Button from "react-bootstrap/Button";

const CustomizedToast = ({ children }) => {
	const [show, toggleShow] = useState(true);

	return (
		<>
		    {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
		    <Toast show={show} onClose={() => toggleShow(false)}>
		        <Toast.Header>
		            <strong className="mr-auto">Bootstrap</strong>
	                <small>4 mins ago</small>
		        </Toast.Header>
		        <Toast.Body>{children}</Toast.Body>
		    </Toast>
		</>
	)
}

const App = () => (
	<Container className="p-3">
	    <Jumbotron>
	        <h1 className="header">Welcome to React-Bootstrap Jumbotron</h1>
	        <CustomizedToast>
	            Hello world! This is a toast message.
	            <span role="img" aria-label="tada">
	                🎉
	            </span>
	        </CustomizedToast>
	    </Jumbotron>
	</Container>
);

export default App;