import React, { Component } from 'react';
import Search from '../component/search';
import { connect } from 'react-redux';

class SearchContainer extends Component {
	state = {
		value: null
	}

	handleSubmit = event => {
		event.preventDefault();

		const { dispatch } = this.props; 
		const type = 'SEARCH_VIDEO';
		const query = this.input.value;
		const payload = { query };

		dispatch({ type, payload });
	}

	render() {
		return <Search 
			setRef={elem => this.input = elem}
			handleSubmit={this.handleSubmit}
		/>
	}
}

export default connect()(SearchContainer);
