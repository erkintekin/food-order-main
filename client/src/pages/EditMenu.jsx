import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editBurgerAction, getBurgerById } from "../actions/burgerAction";

function EditMenu() {
  const { burgerid } = useParams();
  console.log(burgerid);

  const [ad, setAd] = useState("");
  const [smallPrice, setSmallPrice] = useState("");
  const [mediumPrice, setMediumPrice] = useState("");
  const [megaPrice, setMegaPrice] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("et");

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const burgerState = useSelector((state) => state.getBurgerByIdReducer);
  const { burger } = burgerState;
  const { editedBurgers } = useSelector((state) => state.editBurgerReducer);

  const formHandler = (e) => {
    e.preventDefault();

    const editedBurger = {
      _id: burgerid,
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

    dispatch(editBurgerAction(editedBurger));

    navigate("/admin/menuslist");
  };

  useEffect(() => {
    // if (burger?._id === burgerid) {
    //   setAd(burger?.ad);
    //   setCategory(burger.kategori);
    //   setDesc(burger.desc);
    //   setSmallPrice(burger.fiyat[0]["small"]);
    //   setMediumPrice(burger.fiyat[0]["medium"]);
    //   setMegaPrice(burger.fiyat[0]["mega"]);
    //   setImg(burger.img);
    // } else {
    //   dispatch(getBurgerById(burgerid));
    // }
    if (burger?._id !== burgerid) {
      dispatch(getBurgerById(burgerid));
    } else {
      if (editedBurgers?._id === burgerid) {
        setAd(editedBurgers.ad);
        setCategory(editedBurgers.kategori);
        setDesc(editedBurgers.desc);
        setSmallPrice(editedBurgers.fiyat[0]["small"]);
        setMediumPrice(editedBurgers.fiyat[0]["medium"]);
        setMegaPrice(editedBurgers.fiyat[0]["mega"]);
        setImg(editedBurgers.img);
      } else {
        setAd(burger.ad);
        setCategory(burger.kategori);
        setDesc(burger.desc);
        setSmallPrice(burger.fiyat[0]["small"]);
        setMediumPrice(burger.fiyat[0]["medium"]);
        setMegaPrice(burger.fiyat[0]["mega"]);
        setImg(burger.img);
      }
    }
  }, [burger, dispatch]);

  return (
    <div>
      <h3 className="text-dark my-3">Menü Düzenle</h3>
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

export default EditMenu;
