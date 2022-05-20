import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";

import Header from "./Header";
import Home from "./Homepage/Home";
import { useEffect } from "react";
import { getUserAuth } from "../action";
import { connect } from "react-redux";
import ProfilePage from "./profilepage/ProfilePage";
import ResourcesPage from "./resource/ResourcePage";
import ProjectListing from "./ProjectListing/ProjectListing";

function App(props) {
	useEffect(() => {
		props.getUserAuth();
	}, []);
	console.log("app console",props.user)
	return (
		<div className="App">

			<Router>
				<Switch>
					<Route exact path="/">
						<Login />
						{/* <Register /> */}
					</Route>
					<Route path="/feed">
						<Header />
						<Home />
					</Route>
					<Route path="/profile">
						<Header />
						<ProfilePage user={props.user}/>	
					</Route>
					<Route path="/resources">
						<Header />
						<ResourcesPage user={props.user}/>
					</Route>
					<Route path="/listproject">
						<Header />
						<ProjectListing user={props.user}/>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => ({
	getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
