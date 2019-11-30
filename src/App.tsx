import React from 'react';

import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"

import './App.css';


class App extends React.Component<{}, {}> {
	state = {
		filteredText: ""
	}
	search = (searchText) => {
		this.setState({filteredText: searchText})
	}

	render() {
		return <>
			<Header methodSearch={this.search} />
			<Main searchHeader={this.state.filteredText} />
		</>
	}
}

export default App;