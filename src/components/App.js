import React, { Component } from "react";
import AntList from "./AntList";
import environment from "../Environment";
import { QueryRenderer, graphql } from "react-relay";

const AppAllAntQuery = graphql`
	query AppAllAntQuery {
		ants {
			...AntList_ants
		}
	}
`;

export default class App extends Component {
	render() {
		return (
			<QueryRenderer
				environment={environment}
				query={AppAllAntQuery}
				render={({ error, props }) => {
					if (error) {
						return <div>{error.message}</div>;
					} else if (props) {
						return (
							<div>
								<AntList ants={props.ants} />
							</div>
						);
					}
					return <div>Loading</div>;
				}}
			/>
		);
	}
}
