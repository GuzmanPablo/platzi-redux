import React from 'react';
import Category from './category';
import Media from '../../playlist/components/media';
import { Wrapper } from '../styles/categories';

function Categories({ categories, search, handleModalToggle }) {
	console.warn(search)
	return (
		<Wrapper>
			<div>
			{
				!!search
				&& !!search.length
				&& search.map(item => <Media {...item} key={item.id} />)
			}
			</div>
			<div>
			{
				categories.map(item => (
					<Category
						handleModalToggle={handleModalToggle}
						key={item.id}
						{...item}
					/>
				))
			}
			</div>
		</Wrapper>
	)
}

export default Categories;
