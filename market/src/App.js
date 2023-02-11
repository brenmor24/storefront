import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

const App = () => {
    const [state, setState] = useState({
        products: [], filters: [], cart: new Set()
    });

    useEffect(() => {
        (async () => {
            try {
                const data = await fetch("/product");
                const json = await data.json();
                setState({ ...state, products: json });
            } catch (error)  {
                console.error('error fetching products', error);
            }
        })();
    }, []);

    function toggleItem(add, id) {
        if (add) {
            setState({ ...state, cart: new Set(state.cart).add(id) });
        } else {
            const pruned = new Set(state.cart);
            pruned.delete(id);
            setState({ ...state, cart: pruned });
        }
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home products={state.products} toggleItem={toggleItem} cart={state.cart} />}/>
                <Route path="/cart" element={<Cart toggleItem={toggleItem} entries={state.products.filter(item => state.cart.has(item.product_id))}/>}/>
                <Route path="/checkout" element={<Checkout />}/>
            </Routes>
        </Router>
    );
};

export default App;