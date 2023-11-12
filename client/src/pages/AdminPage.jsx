import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import UsersList from "./UsersList";
import OrdersList from "./OrdersList";
import MenusList from "./MenusList";
import AddMenu from "./AddMenu";
import EditMenu from "./EditMenu";

function AdminPage() {
    return (
        <div>
            <h2 className="display-2 text-dark my-2">YÖNETİCİ PANELİ</h2>
            <hr />
            <nav className="navbar navbar-expand-lg bg-warning w-50 mx-auto">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="userslist"
                                >
                                    Kullanıcı Listesi
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="menuslist">
                                    Menü Listesi
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="addmenu">
                                    Yeni Menü Ekle
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="orderslist">
                                    Sipariş Listesi
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="userslist" element={<UsersList />} />
                <Route path="orderslist" element={<OrdersList />} />
                <Route path="menuslist" element={<MenusList />} />
                <Route path="addmenu" element={<AddMenu />} />
                <Route path="editmenu/:burgerid" element={<EditMenu />} />
            </Routes>
        </div>
    );
}

export default AdminPage;
