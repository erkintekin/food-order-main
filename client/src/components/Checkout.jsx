import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkoutOrderAction } from "../actions/orderAction";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";

function Checkout({ toplamFiyat }) {
  const orderState = useSelector((state) => state.checkoutOrderReducer);
  const { success, error, loading } = orderState;
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(checkoutOrderAction(token, toplamFiyat));
    if (!error) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Ödeme Başarılı",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <StripeCheckout
        amount={toplamFiyat * 100}
        stripeKey="pk_test_51OBCUEHPEWRDpvGIZu0kHa43T9FxHiYCU5RZNaq3ipkPtaNLKz109fMEGUoOaobIRjX7p7NOAz0uHHXScC8q1AYo00LY5q7Gmq"
        currency="TRY"
        shippingAddress
        billingAddress
        token={tokenHandler}
      >
        <button className="btn btn-outline-danger mb-3 w-25">HEMEN ÖDE!</button>
      </StripeCheckout>
    </div>
  );
}

export default Checkout;
