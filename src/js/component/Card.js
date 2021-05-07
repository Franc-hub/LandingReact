import React from "react";

const Card = ({ title }) => {
	return (
		<div className="col-lg-3 col-md-6 mb-4">
			<div className="card h-100">
				<div className="card-body">
					<h4 className="card-title">{title}</h4>
					<img
						src="https://artikalia.com/wp-content/uploads/2019/11/compo-tegar-4.jpg"
						className="img-fluid"></img>
					<p className="card-text">
						Various versions have evolved over the years, sometimes
						by accident, sometimes on purpose (injected humour and
						the like).
					</p>
				</div>
				<div className="card-footer">
					<a href="#" className="btn btn-primary">
						Find Out More!
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
