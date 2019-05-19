function data(state, { type, payload }) {
	switch(type) {
		case 'SEARCH_VIDEO':
			const { query } = payload;
			const search = state.data.categories[0].playlist.filter(({ author }) => !!query && author.includes(query));
			return { ...state, search };

		default:
			return state;
	}
};

export default data;
