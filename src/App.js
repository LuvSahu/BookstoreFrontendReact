import logo from './logo.svg';
import './App.css';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import Dashboard from './pages/dashboard/dashboard';
import Lander from './pages/lander/lander';
import Header from './pages/header/header';
import BookDetails from './pages/bookdeatails/bookdetails';
import Books from './pages/books/books';
import Cart from './pages/cart/cart';
import CustomerDetails from './pages/customerdetails/customerdetails';
import OrderSummery from './pages/ordersummery/ordersummery';
import BookRouter from './router/router';
import Order from './pages/orderplaced/order';

function App() {
  return (
    <div className="App">
       {/* <Login/> */}
       {/* <Signup/> */}
       {/* <Lander/> */}
       {/* <Header/> */}
       {/* <Dashboard/> */}
       {/* <BookDetails/> */}
       {/* <Books/> */}
       {/* <Cart/> */}
       <BookRouter/>
       {/* <CustomerDetails/> */}
       {/* <OrderSummery/> */}
       {/* <Order/> */}
    </div>
  );
}

export default App;
