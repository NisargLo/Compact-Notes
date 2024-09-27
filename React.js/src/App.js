import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Pages/Layout';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={ <Home/>} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
  	);
}

export default App;
