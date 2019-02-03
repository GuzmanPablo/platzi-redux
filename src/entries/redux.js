import { createStore } from 'redux';

const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	const data = new FormData(form);
	const title = data.get('title');

	console.warn('Titulo', title);
};

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const initialState = [{
	"title": "Karma police"
},{
	"title": "One more time"
},{
	"title": "Opale"
}];

const store = createStore(
	(state) => state,
	initialState,
	devTools
);

const container = document.getElementById('playlist');
const playlist = store.getState();

playlist.forEach((item, i)=> {
	const template = document.createElement('p');
	template.textContent = `${i+1}. item.title`;
	container.appendChild(template);
});
