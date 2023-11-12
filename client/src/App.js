import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import OrdersPage from "./pages/OrdersPages";
import AdminPage from "./pages/AdminPage";

function App() {
  // const usersState = useSelector((state) => state.userReducer);
  // const { users } = usersState;
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sepet" element={<CartPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myorders" element={<OrdersPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
