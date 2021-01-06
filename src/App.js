import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './contexts/ProductContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import Product from './components/Product';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};
	console.log(cart);
	return (
		<ProductContext.Provider value={{ products, addItem }} >
			<div className="App">
				<Navigation cart={cart} />

				{/* Routes */}
				<Route exact path="/">
					<Products products={products} addItem={addItem} />
				</Route>

				<Route path="/cart">
					<ShoppingCart cart={cart} />
				</Route>
			</div>
		</ProductContext.Provider>
	);
}

export default App;
