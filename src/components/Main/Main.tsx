import React from 'react';

import { DriverComponent } from "./DriverComponent"

export interface Driver {
	id: number,
	name: string,
	rank: string,
	phone: string,
	email: string,
	main_pic: string
}
interface MainState { 
	driverList: Driver[],
}
export class Main extends React.Component<{ searchHeader: string }, MainState > {
	state: MainState = {
		driverList: [],
	}
	
	componentDidMount() {
		fetch("./data-api/data.json")
		.then(res => res.json())
		.then(data => {
			this.setState({ 
				driverList: data
			})
		})
	}

	render() {
		return <main>
			<div className="drivers_list">
			{
				this.state.driverList
					.filter(
						driver => driver.name.toLowerCase().includes(this.props.searchHeader) || driver.rank.includes(this.props.searchHeader)
						)
					.map(
						driver => <DriverComponent data={driver} key={driver.id} />
					)
			}
			</div>
		</main>
	}
}