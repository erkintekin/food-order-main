import axios from "axios";
import Swal from "sweetalert2";

//Register
export const registerUserAction = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    const response = await axios.post(
      "http://localhost:4000/api/users/register",
      user
    );
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: response.data });
    // window.location.href = "/login";
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
  }
};

//Login
export const loginUserAction = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const response = await axios.post(
      "http://localhost:4000/api/users/login",
      user
    );
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error });
  }
};

export const logoutUserAction = () => {
  localStorage.removeItem("currentUser");
  // window.location.href = "/login";
};

export const getAllUsersAction = () => async (dispatch) => {
  dispatch({ type: "GET_ALL_USERS_REQUEST" });
  try {
    const response = await axios.get(
      "http://localhost:4000/api/users/getAllUsers"
    );
    dispatch({ type: "GET_ALL_USERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_ALL_USERS_FAILED", payload: error });
  }
};

export const deleteUserAction = (userid) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/users/deleteUser",
      { userid }
    );
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Silme İşlemi Başarılı",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    console.log(error);
  }
};
