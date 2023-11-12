export const addToCartAction =
  (menu, miktar, ozellik) => (dispatch, getState) => {
    var cartItem = {
      _id: menu._id,
      ad: menu.ad,
      img: menu.img,
      desc: menu.desc,
      ozellik: ozellik,
      miktar: miktar,
      fiyat: menu.fiyat,
      fiyatlar: menu.fiyat[0][ozellik] * miktar,
    };
    if (miktar > 0 && miktar <= 10) {
      dispatch({
        type: "ADD_TO_CART",
        payload: cartItem,
      });
      const cartItems = getState().cartReducer.cartItems;
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      alert("Miktarı doğru giriniz.");
    }
  };

export const deleteFromCartAction = (menu) => (dispatch, getState) => {
  dispatch({
    type: "DELETE_FROM_CART",
    payload: menu,
  });

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
