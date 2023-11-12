import { applyMiddleware, combineReducers, createStore } from "redux";
import { getAllBurgersReducer } from "./reducers/burgerReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cartReducer";
import {
  getAllUsersReducer,
  loginUserReducer,
  registerUserReducer,
} from "./reducers/userReducer";
import {
  checkoutOrderReducer,
  getAllOrdersReducer,
  getUsersOrdersReducer,
} from "./reducers/orderReducer";

const finalReducer = combineReducers({
  getAllBurgersReducer: getAllBurgersReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  checkoutOrderReducer: checkoutOrderReducer,
  getUsersOrdersReducer: getUsersOrdersReducer,
  getAllOrdersReducer: getAllOrdersReducer,
  getAllUsersReducer: getAllUsersReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};

const compose = composeWithDevTools({});
const store = createStore(
  finalReducer,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store;
