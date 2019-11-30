import React from 'react';

interface SearchProps {
	methodSearch: (event: MouseEvent) => void
}
export class Header extends React.Component<SearchProps, {}> {
	search = (event) => {
		this.props.methodSearch(event.target.value)
	}
	render() {
		return <header>
    		<h1>Contact List</h1>
    		<label>
      			<input 
	      			placeholder="search..." 
	      			type="search" 
	      			onChange={this.search}
      			/>
      			<span role="img" aria-label="search">🔍</span>
    		</label>
  		</header>
	}
}