import './App.css';
import Header from './Components/Header';
import Product from './Components/Product';
import { Route, Routes } from 'react-router-dom';
import Productdetail from './Pages/Productdetail';
import About from './Pages/About';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
const App = () => {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/product" element={<Product />}></Route>
				<Route path="/product/:id" element={<Productdetail />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</div>
	);
};

export default App;
