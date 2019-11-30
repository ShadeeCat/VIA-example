import React from 'react';

import { Driver } from "./Main"

interface DriverComponentProps {
	data: Driver
}
interface DriverCompomemtState {
	isHover: boolean, 
	isAnimatedDown: boolean
}
export class DriverComponent extends React.Component <DriverComponentProps, {}> {
	state : DriverCompomemtState = {
		isHover: false,
		isAnimatedDown: false
	}
	onMouseEnter = () => {
		this.setState({ isAnimatedDown: true, isHover: true })
	}
	onMouseLeave = () => {
		this.setState({ isAnimatedDown: false, isHover: false })
	}
	render() {
		const { data: driver } = this.props
		return	<figure 
		onMouseEnter={ this.onMouseEnter }
		onMouseLeave={ this.onMouseLeave }
		className={ "contact_data" +  (this.state.isAnimatedDown ? " isAnimatedDown" : "") }>
			<div className={ 'figure-container ' + ((driver.rank === 'citizen') ? 'citizen' : 'professional') } >
				<img src={ 'images/drivers/' + driver.main_pic } alt="" />
			</div>
			<figcaption>{ driver.name }</figcaption>
			<p>{ driver.rank }</p>
			{
				this.state.isHover && <div className="hovers_data">
					<a href={ "tel:" + driver.phone }>{ "Phone Number: " + driver.phone }</a>
					<a href={ "mailto:" + driver.email }>{ "Email: " + driver.email }</a>
				</div>
			}
		</figure>
	}
}