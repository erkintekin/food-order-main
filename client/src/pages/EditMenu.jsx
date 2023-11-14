import React from "react";

function EditMenu() {
  return (
    <div>
      <h3 className="text-dark my-3">Menü Düzenle</h3>
      <form className="w-75 m-auto ">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Menü Adını Giriniz"
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Small boy fiyatını Giriniz"
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Medium boy fiyatını Giriniz"
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Mega boy fiyatını Giriniz"
        />
        <select name="" id="" className="form-select mb-2">
          <option value="Et Menü">Et Menü</option>
          <option value="Tavuk Menü">Tavuk Menü</option>
        </select>
        <textarea
          name=""
          id=""
          className="form-control mb-2"
          placeholder="Fotoğraf Linkini Giriniz"
        />
        <input
          type="text"
          className="form-control"
          placeholder="Add Menu Photograph"
        />
        <button type="submit" className="btn btn-warning w-100 mt-7">
          Save
        </button>
      </form>
    </div>
  );
}

export default EditMenu;
