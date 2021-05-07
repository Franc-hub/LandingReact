import React from "react";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Nav from "./Nav";
import Footer from "./Footer";

//create your first component
export function Home() {
	return (
		<div className="container-fluid">
			<Nav />
			<Jumbotron />
			<div className="row">
				<Card
					title="1"
					src="https://images.unsplash.com/photo-1457481599234-8e8612f52f19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
					text=""
				/>
				<Card
					title="2"
					src="https://images.unsplash.com/photo-1575733135961-39fb82b34f86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
				/>
				<Card
					title="3"
					src="https://images.unsplash.com/photo-1554701417-aac42d52eebb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fDM2MHgyMDB8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
				/>
				<Card
					title="4"
					src="https://images.unsplash.com/photo-1526404801122-40fc40fca08f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fDM2MHgyMDB8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
				/>
			</div>

			<Footer />
		</div>
	);
}
