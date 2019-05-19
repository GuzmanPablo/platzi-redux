import React from 'react';
import styled from 'styled-components';
import Theme from '../../styles/theme';

const Container = styled.form`
	grid-area: search;
	background: #fff;
	display: flex;
	align-items: flex-end ;
`;

const SearchInput = styled.input`
	width: 300px;
	height: 20px;
	margin: 20px;
	padding: 10px;
	border-radius: 5px;
	border: 1px solid ${Theme.colors.grey[100]};
`;

function Search ({ handleSubmit, setRef }) {
	return (
		<Container onSubmit={handleSubmit}>
			<SearchInput
				innerRef={setRef}
				type="text"
				placeholder="Buscar..."
			/>
		</Container>
	)
}

export default Search;