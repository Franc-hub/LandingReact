import React from "react";

const Card = props => {
	return (
		<div className="col-lg-3 col-md-6 mb-4">
			<div className="card h-100">
				<div className="card-body">
					<img src={props.src} className="img-fluid"></img>
					<h4 className="card-title">{props.title}</h4>
					<p className="card-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Maxime mollitia, molestiae quas vel sint commodi
						repudiandae consequuntur voluptatum laborum numquam
						blanditiis harum quisquam eius sed odit fugiat iusto
						fuga praesentiu
					</p>
				</div>
				<div className="card-footer text-center">
					<a href="#" className="btn btn-primary">
						Find out More
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
