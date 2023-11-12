import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../actions/userAction";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.loginUserReducer);
  const { error, currentUser, success, loading } = userState;
  const navigate = useNavigate();
  const girisHandler = () => {
    if (mail === "" || password === "") {
      Swal.fire("Eksik alanları doldurunuz");
    } else {
      const kullanici = {
        mail: mail,
        password: password,
      };
      dispatch(loginUserAction(kullanici));
      if (!error) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Giriş Başarılı",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Giriş hatalı!",
        });
      }
    }
  };
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <div className="shadow p-3 rounded bg-dark w-25">
        <div className="form-group my-3">
          <label htmlFor="mail">Mailinizi Giriniz</label>
          <input
            type="text"
            className="form-control"
            id="mail"
            aria-describedby="mailDescription"
            placeholder="Lütfen Mailinizi Giriniz."
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="password">Parolanızı Giriniz</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Lütfen Parolanızı Giriniz"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={girisHandler}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
