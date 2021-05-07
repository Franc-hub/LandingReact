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
				<Card title="1" />
				<Card title="2" />
				<Card title="3" />
				<Card title="4" />
			</div>

			<Footer />
		</div>
	);
}
