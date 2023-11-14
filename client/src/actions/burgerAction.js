import axios from "axios";

export const getAllBurgers = () => async (dispatch) => {
  dispatch({
    type: "GET_BURGERS_REQUEST",
  });
  try {
    const response = await axios.get(
      "http://localhost:4000/api/burgers/getBurgers"
    );

    dispatch({
      type: "GET_BURGERS_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_BURGERS_FAILED",
      payload: error,
    });
  }
};

export const deleteBurgerAction = (burgerid) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/burgers/deleteBurger",
      {
        burgerid,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const editBurgerAction = (editedBurger) => async (dispatch) => {
  dispatch({ type: "EDIT_BURGER_REQUEST" });
  try {
    const response = await axios.post(
      "http://localhost:4000/api/burgers/editBurger",
      { editedBurger }
    );
    dispatch({
      type: "EDIT_BURGER_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "EDIT_BURGER_FAILED",
      payload: error,
    });
  }
};

export const addBurgerAction = (menu) => async (dispatch) => {
  dispatch({ type: "ADD_BURGERS_REQUEST" });
  try {
    const response = await axios.post(
      "http://localhost:4000/api/burgers/addBurger",
      { menu }
    );
    dispatch({
      type: "ADD_BURGERS_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "ADD_BURGERS_ERROR",
      payload: error,
    });
  }
};

export const getBurgerById = (burgerid) => async (dispatch) => {
  dispatch({ type: "GET_BURGERS_BY_ID_REQUEST" });

  try {
    const response = await axios.post(
      "http://localhost:4000/api/burgers/getBurgerById",
      { burgerid }
    );

    console.log(response);
    dispatch({ type: "GET_BURGER_BY_ID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({
      type: "GET_BURGER_BY_ID_FAILED",
      payload: error,
    });
  }
};
