import React from 'react';

interface DriverList {
	name: string,
	rank: string,
	phone: string,
	email: string,
	main_pic: string
}
export class Main extends React.Component<{}, { driverList: DriverList[] } > {

	state: { driverList: DriverList[] } = {
		driverList: []
	}
	
	componentDidMount() {
		fetch("./data-api/data.json")
		.then(res => res.json())
		.then((data) => {
			console.log(data)
		})
	}

	render() {
		return <main>
			
		</main>
	}
}

const Driver = (props: DriverList) => {
	return <div>
		<img src="" alt="" />

	</div>
}