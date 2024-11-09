import { render } from 'preact';
import "./index.less"
import { Main } from './Main';

export function App() {
	return <Main></Main>
}

render(<App />, document.getElementById('app'));
let theme = localStorage["theme"]
if (theme != "") document.documentElement.classList.toggle(theme)