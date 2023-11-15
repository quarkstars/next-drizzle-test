import { Application } from "@/modules/applications/applications.validation";
import React from "react";

const page = async () => {
	const response = await fetch("http://localhost:3000/api/applications");
	let applications: Application[] = [];
	try {
		const { data, error } = await response.json();
		if (data) {
			applications = data;
		}
	} catch (error) {
		console.error(error);
	}

	return (
		<div>
			{applications &&
				applications.map((application: Application) => {
					return (
						<div key={application.id}>
							<h1>{application.name}</h1>
						</div>
					);
				})}
			{!applications ||
				(applications?.length === 0 && <h1>No applications found</h1>)}
		</div>
	);
};

export default page;
