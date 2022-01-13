import React, { useState, useEffect } from "react";
import "../button.css";
function Countries() {
	const [Country, setCountry] = useState([]);
	const[refresh,SetRefresh] = useState(false);

	const getCountries = async () => {
		try {
			const response = await fetch(
				"https://restcountries.com/v3.1/region/asia"
			);
			let x = await response.json();
			console.log(x);
			setCountry(x);
		} catch (error) {
			console.log("My error is " + error);
		}
	};

	useEffect(() => {
		getCountries();
		SetRefresh(false);
	}, [refresh]);
	return (
		<React.Fragment>
			

			<button
				className="button-27"
				onClick={() => {
					SetRefresh(true);
				}}
			>
				REFRESH
			</button>
			        {refresh &&	<h1 className="text-light">REFRESHED</h1> }

			
				<div className="container-fluid mt-5">
				
			
				<h2 className="text-light">COUNTRIES IN ASIA</h2>
					<div className="row text-center">
						{Country.map((element) => {
							let langs = "";

							for (let a in element.languages) {
								langs = langs + element.languages[a] + ",";
							}
							langs = langs.slice(0, langs.length - 1) + ".";

							let borders = "";
							for (let b in element.borders) {
								borders = borders + element.borders[b] + ",";
							}

							borders = borders.slice(0, borders.length - 1) + ".";
							return (
								<div
									className="card"
									style={{
										width: "19rem",
										margin: "2rem",
										border: "1px solid",
										textAlign: "left",
									}}
									key={element.population}
								>
									<img
										src={element.flags.png}
										className="card-img-top"
										style={{ height: "10rem", border: "1px solid" }}
										alt="..."
									/>
									<div className="card-body">
										<div className="country">
											Country: {element.name.common}
										</div>
										<div className="capital">Capital: {element.capital}</div>
										<div className="region">Region: {element.region}</div>
										<div className="subregion">
											Subregion: {element.subregion}
										</div>
										<div className="population">
											Population: {element.population}
										</div>
										<div className="population">Borders:{borders}</div>
										<div className="population">Languages: {langs}</div>
									</div>
								</div>
							);
						})}
					</div>
				</div> 
			
		</React.Fragment>
	);
}

export default Countries;
