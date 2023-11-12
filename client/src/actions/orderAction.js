import axios from "axios";
export const checkoutOrderAction =
  (token, toplamfiyat) => async (dispatch, getState) => {
    dispatch({ type: "CHECKOUT_ORDER_REQUEST" });
    const currentUser = getState().loginUserReducer.currentUser;
    const cartItems = getState().cartReducer.cartItems;
    try {
      const response = await axios.post(
        "http://localhost:4000/api/orders/checkoutOrder",
        {
          token,
          toplamfiyat,
          currentUser,
          cartItems,
        }
      );
      console.log("Response", response);
      dispatch({
        type: "CHECKOUT_ORDER_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "CHECKOUT_ORDER_FAILED",
        payload: error,
      });
    }
  };

export const getUsersOrdersAction = () => async (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser;
  dispatch({ type: "GET_USER_ORDERS_REQUEST" });
  // console.log(currentUser);
  try {
    const response = await axios.post(
      "http://localhost:4000/api/orders/getOrdersByUser",
      {
        userId: currentUser._id,
      }
    );
    // console.log(response);
    dispatch({ type: "GET_USER_ORDERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_USER_ORDERS_FAILED", payload: error });
  }
};

export const getAllOrdersAction = () => async (dispatch) => {
  dispatch({ type: "GET_ALL_ORDERS_REQUEST" });

  try {
    const response = await axios.get(
      "http://localhost:4000/api/orders/getAllOrders"
    );
    dispatch({ type: "GET_ALL_ORDERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_ALL_ORDERS_SUCCESS", payload: error });
  }
};
