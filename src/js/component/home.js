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
				<Card title="1" src="" text="" />
				<Card title="2" src="" text="" />
				<Card title="3" src="" text="" />
				<Card title="4" src="" text="" />
			</div>

			<Footer />
		</div>
	);
}
