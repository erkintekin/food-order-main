import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBurgerAction, getAllBurgers } from "../actions/burgerAction";
import { Link } from "react-router-dom";

function MenusList() {
  const dispatch = useDispatch();

  const burgerState = useSelector((state) => state.getAllBurgersReducer);
  const { burgers } = burgerState;

  useEffect(() => {
    dispatch(getAllBurgers());
  }, [burgers]);

  return (
    <div>
      <h3 className="text-dark my-3">Menu List</h3>
      <table className="table table-dark table-hovered table-striped w-75 mx-auto">
        <thead>
          <tr>
            <th>name</th>
            <th>price</th>
            <th>category</th>
            <th>operation</th>
          </tr>
        </thead>
        <tbody>
          {burgers.map((burger) => (
            <tr>
              <td>{burger.ad}</td>
              <td className="text-start">
                Small: {burger.fiyat[0]["small"]} ₺<br />
                Medium: {burger.fiyat[0]["medium"]} ₺<br />
                Mega: {burger.fiyat[0]["mega"]} ₺<br />
              </td>
              <td>{burger.kategori}</td>
              <td>
                <i
                  className="fa-solid fa-trash text-danger"
                  style={{ cursor: "pointer" }}
                  onClick={() => dispatch(deleteBurgerAction(burger._id))}
                />
                <Link to={`/admin/editMenu/${burger._id}`}>
                  <i className="fa-solid fa-pen-to-square text-info mx-2" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MenusList;
