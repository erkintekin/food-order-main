import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersOrdersAction } from "../actions/orderAction";

function OrdersPage() {
    const orderState = useSelector((state) => state.getUsersOrdersReducer);
    const userState = useSelector((state) => state.loginUserReducer);
    const { success, loading, orders } = orderState;
    console.log(orders);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersOrdersAction());
    }, []);

    return (
        <div className="container">
            <h2 className="display-2 text-warning">Siparişlerim</h2>
            <hr className="border border-warning"></hr>
            {orders.map((order) => (
                <div className="row border border-3 border-warning shadow-lg p-3 mb-5 bg-body-tertiary rounded bg-light text-warning">
                    {
                        order.orderItems.map((item) => (
                            <div className="row border border-2 border-danger my-2 siparisler">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div style={{ paddingTop: "35px" }}>
                                                <h4 className="text-black">
                                                    {item.ad} [{item.ozellik}] * {item.miktar} ={" "}
                                                    {item.fiyatlar} ₺
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div>
                                                <img src={item.img} style={{ height: "150px" }} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div style={{ paddingTop: "35px" }}>
                                                <h4 className="text-black">Adres Bilgileri</h4>
                                                <p>Sokak: {order.shippingAddress.street} </p>
                                                <p>Şehir: {order.shippingAddress.city} </p>
                                                <p>Ülke: {order.shippingAddress.country} </p>
                                                <p>Posta Kodu: {order.shippingAddress.zipCode} </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    < div className="row" >
                        <div className="col-md-12">
                            <div style={{ paddingTop: "35px" }}>
                                <h4 className="text-black">Sipariş Bilgileri</h4>
                                <p className="text-black">
                                    Sipariş Tutarı: {order.orderAmount} ₺{" "}
                                </p>
                                <p className="text-black">
                                    Tarih: {order.createdAt.substring(0, 10)}{" "}
                                </p>

                                <p className="text-black">Sipariş No: {order._id} </p>
                            </div>
                        </div>
                    </div>
                </div >
            ))
            }
        </div >
    );
}

export default OrdersPage;
