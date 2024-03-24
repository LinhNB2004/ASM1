import './App.css';
import Header from './Components/Header';
import Product from './Components/Product';
import { Route, Routes } from 'react-router-dom';
import Productdetail from './Pages/Productdetail';
const App = () => {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/product" element={<Product />}></Route>
				<Route path="/product/:id" element={<Productdetail />}></Route>
			</Routes>

			<h1>Chúc các bạn làm bài tốt!</h1>
		</div>
	);
};

export default App;
