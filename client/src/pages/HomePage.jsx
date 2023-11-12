import React, { useEffect } from "react";
import MenuList from "../components/MenuList";
import { useDispatch, useSelector } from "react-redux";
import { getAllBurgers } from "../actions/burgerAction";
import Dondurucu from "../components/Dondurucu";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const dispatch = useDispatch();
  const burgerState = useSelector((state) => state.getAllBurgersReducer);
  const { burgers, loading } = burgerState;
  console.log(burgers);
  const navigate = useNavigate();

  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  useEffect(() => {
    if (currentUser) {
      dispatch(getAllBurgers());
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {loading ? (
            <Dondurucu />
          ) : (
            burgers.map((menu) => (
              <div key={menu._id} className="col-md-3">
                <MenuList menu={menu} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
