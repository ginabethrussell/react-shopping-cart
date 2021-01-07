import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';
import { useLocalStorage } from './hooks/useLocalStorage';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useLocalStorage('cart', []);

	// add the cart to localStorage when cart updates
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	const addItem = item => {
		setCart([...cart, item])
	};
	const removeItem = id => {
		const updatedCart = [...cart];
		const editedCart = updatedCart.filter(item => item.id !== id);
		setCart(editedCart);
	}

	return (
		<ProductContext.Provider value={{ products, addItem }} >
			<CartContext.Provider value={{cart, removeItem}} >
				<div className="App">
					<Navigation />

					{/* Routes */}
					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
