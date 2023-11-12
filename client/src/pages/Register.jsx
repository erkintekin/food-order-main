import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { registerUserAction } from "../actions/userAction";

function Register() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const userState = useSelector((state) => state.registerUserReducer);
  const { success, loading, error } = userState;

  const navigate = useNavigate();

  const kaydolHandler = () => {
    if (password !== confirmPassword) {
      Swal.fire("Şifreler uyuşmamaktadır");
    } else if (
      name === "" ||
      mail === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      Swal.fire("Eksik alanları doldurunuz.");
    } else {
      const kullanici = {
        name: name,
        mail: mail,
        password: password,
      };
      dispatch(registerUserAction(kullanici));
      if (!error) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Kullanıcı Kaydı Başarılı",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Böyle bir kullanıcı var!",
        });
      }
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="container bg-warning w-50" style={{ height: "350px" }}>
        <h2 className="display-4">Kullanıcı Kayıt Ekranı</h2>
        <input
          type="text"
          placeholder="İsminizi giriniz"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email giriniz"
          className="form-control my-3"
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Şifrenizi giriniz"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Şifrenizi tekrar giriniz"
          className="form-control my-3"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="btn btn-danger w-50 m-auto" onClick={kaydolHandler}>
          YENİ KAYIT OLUŞTUR
        </button>
      </div>
    </div>
  );
}

export default Register;
