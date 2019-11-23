import React from 'react';

interface Driver {
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
export class Main extends React.Component<{}, MainState > {
	state: MainState = {
		driverList: []
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
		<div className="drivers_list">{
			this.state.driverList.map(
				driver => <DriverComponent data={driver} key={driver.id} />
			)
		}</div>
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
		this.setState({isAnimatedDown: true, isHover: true})
	}
	onMouseLeave = () => {
		this.setState({isAnimatedDown: false, isHover: false})
	}
	render() {
		console.log(this.state)
		const { data: driver } = this.props
		return	<figure 
		onMouseEnter={this.onMouseEnter} 
		onMouseLeave={this.onMouseLeave} 
		className={"contact_data" +  (this.state.isAnimatedDown ? " isAnimatedDown" : "")}>
			<div className={'figure-container ' + ((driver.rank === 'citizen') ? 'citizen' : 'professional')} >
				<img src={ 'images/drivers/' + driver.main_pic } alt="" />
			</div>
			<figcaption>{driver.name}</figcaption>
			<p>{driver.rank}</p>
			{
				this.state.isHover && <div className="hovers_data">
					<a href={"tel:" + driver.phone}>{"Phone Number: " + driver.phone}</a>
					<a href={"mailto:" + driver.email}>{"Email: " + driver.email}</a>
				</div>
			}
		</figure>
	}
}