import "./index.less"
import { render } from 'preact';
import { Main } from './Main';

/**
 * The main application component.
 * This component serves as the entry point for the application.
 * It renders the `Main` component.
 *
 * @returns The rendered `Main` component.
 */
export function App() {
	return <Main></Main>
}

render(<App />, document.getElementById('app'));
let theme = localStorage["theme"]
if (theme != "") document.documentElement.classList.toggle(theme)