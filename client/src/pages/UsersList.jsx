import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserAction, getAllUsersAction } from "../actions/userAction";

function UsersList() {
    const dispatch = useDispatch();
    const usersState = useSelector((state) => state.getAllUsersReducer);
    const { users } = usersState;

    useEffect(() => {
        dispatch(getAllUsersAction())
    }, [users])

    return (
        <div>
            <h3 className="text-dark my-3">Kullanıcılar Listesi</h3>
            <table className="table table-hovered table-dark table-striped w-75 mx-auto">
                <thead>
                    <tr>
                        <th>Kullanıcı Id</th>
                        <th>Adı</th>
                        <th>Maili</th>
                        <th>Operasyonlar</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.mail}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => dispatch(deleteUserAction(user._id))}>Sil</button>
                            </td>
                        </tr>))}
                </tbody>
            </table>
        </div>
    );
}

export default UsersList;
