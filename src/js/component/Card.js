import React from "react";

const Card = ({ title, src, text }) => {
	return (
		<div className="col-lg-3 col-md-6 mb-4">
			<div className="card h-100">
				<div className="card-body">
					<h4 className="card-title">{title}</h4>
					<img src={src} className="img-fluid"></img>
					<p className="card-text">{text}</p>
				</div>
				<div className="card-footer">
					<a href="#" className="btn btn-primary"></a>
				</div>
			</div>
		</div>
	);
};

export default Card;
