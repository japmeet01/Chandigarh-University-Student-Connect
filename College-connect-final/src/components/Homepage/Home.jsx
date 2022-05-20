import React,{useEffect} from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import styled from "styled-components";
import { addUser } from "../../routes/routes";
import Left from "./Left";
import Main from "./Main";
import Right from "./Right";

const Container = styled.div`
	max-width: 100%;
`;

const Content = styled.div`
	max-width: 1128px;
	margin: auto;
`;

const Section = styled.section`
	min-height: 50px;
	margin: 16px 0 -30px;
	box-sizing: content-box;
	text-align: center;
	text-decoration: underline;
	display: flex;
	justify-content: center;
	h5 {
		color: #0a66c2;
		font-size: 14px;
		margin-block-start: 0;
		margin-block-end: 0;
		a {
			font-weight: 700;
		}
	}
	p {
		font-size: 14px;
		color: #434649;
		margin-block-start: 0;
		margin-block-end: 0;
		font-weight: 600;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		padding: 0 5px;
		margin: 16px 0;
	}
`;

const Layout = styled.div`
	display: grid;
	grid-template-areas: "left main right";
	grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
	column-gap: 25px;
	row-gap: 25px;
	margin: 25px 0;
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		padding: 0 5px;
	}
`;

function Home(props) {
	// console.log("inside",props.user);
	useEffect(() => {
		if (props.user) {
			const functi=async ()=> {
				const {data}=await addUser({
					name: props?.user?.displayName,
					email: props?.user?.email,
					uid: props?.user?.uid,
					image: props?.user?.photoURL,
					phoneNumber: props?.user?.phoneNumber,
				})
			}
			functi();
			return ;
		}
		else {
		}

	}, []);
	return (
		<Container>
			{!props.user && <Redirect to="/" />}
			<Content>
			<Section>
					<h5>
						<a>Looking for better opportunities????</a>
					</h5>
					<p>- Engage and connect with like minded people.</p>
				</Section>
				<Layout>
					<Left />
					<Main />
					<Right />
				</Layout>
			</Content>
		</Container>
	);
}

const mapStateToProps = (state) => {
	return {
		user: state.userState.user,
	};
};

export default connect(mapStateToProps)(Home);
