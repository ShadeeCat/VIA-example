import React from 'react';

interface Driver {
	id: number,
	name: string,
	rank: string,
	phone: string,
	email: string,
	main_pic: string,
}
interface MainState { 
	driverList: Driver[],
	isHover: boolean 
}
export class Main extends React.Component<{}, MainState > {
	state: MainState = {
		driverList: [],
		isHover: false
	}
	
	componentDidMount() {
		fetch("./data-api/data.json")
		.then(res => res.json())
		.then(data => {
			this.setState({ driverList: data })
		})
	}


	render() {
		return <main>
		{
			this.state.driverList.map(
				driver => <DriverComponent data={driver} />
			)
		}
		</main>
	}
}
interface DriverComponentProps {
	data: Driver
}
interface DriverCompomemtState { 
	isHover: boolean, 
	isAnimatedDown: boolean
}
class DriverComponent extends React.Component <DriverComponentProps, {}> {
	state : DriverCompomemtState = {
		isHover: false,
		isAnimatedDown: false
	}
	onMouseEnter = () => {
		this.setState({isHover: true})
	}
	onMouseLeave = () => {
		this.setState({isAnimatedDown: true})
	}
	render() {
		console.log(this.state)
		const { data: driver } = this.props
		return	<figure 
		onMouseEnter={this.onMouseEnter} 
		onMouseLeave={this.onMouseLeave} >
			<img src={ 'images/drivers/' + driver.main_pic } alt="" />
			<figcaption>{driver.name}</figcaption>
			<span>{driver.rank}</span>
			{
				this.state.isHover && <div className={"contact_data" +  (this.state.isAnimatedDown ? " isAnimatedDown" : "")}>
					<p>{driver.rank}</p>
					<a href={"tel:{2343}"}>{driver.phone}</a>
					<a href="mailto: {abc@example.com}">{driver.email}</a>
				</div>
			}
		</figure>
	}
}