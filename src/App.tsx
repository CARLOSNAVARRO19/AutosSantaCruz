import './App.css';
import routes from './routes/Routes';
import { Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<Routes>{routes}</Routes>
		</>
	);
}

export default App;
