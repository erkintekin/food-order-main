import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBurgerAction } from "../actions/burgerAction";

function AddMenu() {
  const [ad, setAd] = useState("");
  const [smallPrice, setSmallPrice] = useState("");
  const [mediumPrice, setMediumPrice] = useState("");
  const [megaPrice, setMegaPrice] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("et");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();

    const menu = {
      ad: ad,
      img: img,
      desc: desc,
      fiyat: {
        small: smallPrice,
        medium: mediumPrice,
        mega: megaPrice,
      },
      kategori: category,
    };

    dispatch(addBurgerAction(menu));
    navigate("/admin/menuslist");
  };

  return (
    <div>
      <h3 className="text-dark my-3">Menü Ekle</h3>
      <form className="w-75 m-auto " onSubmit={formHandler}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Menü Adını Giriniz"
          value={ad}
          onChange={(e) => setAd(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Small boy fiyatını Giriniz"
          value={smallPrice}
          onChange={(e) => setSmallPrice(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Medium boy fiyatını Giriniz"
          value={mediumPrice}
          onChange={(e) => setMediumPrice(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Mega boy fiyatını Giriniz"
          value={megaPrice}
          onChange={(e) => setMegaPrice(e.target.value)}
        />
        <select
          name=""
          id=""
          className="form-select mb-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Et Menü">Et Menü</option>
          <option value="Tavuk Menü">Tavuk Menü</option>
        </select>
        <textarea
          name=""
          id=""
          className="form-control mb-2"
          placeholder="Açıklama Giriniz"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Fotoğraf Linkini Giriniz"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <button type="submit" className="btn btn-warning w-100 mb-5 mt-2">
          KAYDET
        </button>
      </form>
    </div>
  );
}

export default AddMenu;
