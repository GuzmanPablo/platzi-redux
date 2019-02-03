//import { createStore } from 'redux';

const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	const data = new FormData(form);
	const title = data.get('title');

	console.warn('Titulo', title);
};
/*
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const initialState = [{
	"title": "Karma police"
},{
	"title": "One more time"
},{
	"title": "Opale"
}];

const store = createStore(
	() => {},
	initialState,
	devTools
);
*/