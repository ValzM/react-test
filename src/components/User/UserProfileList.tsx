import { NavLink, Outlet } from "react-router-dom";
import { users } from "./UserListData";

export default function UserProfileList() {

    return (
        <main>
            <ul className="user-list-wrapper">
                {
                    users.map((user) => (

                        <li className="user-list-card"><NavLink to={user.id}>{user.firstname} {user.lastname} </NavLink></li>

                    ))

                }
            </ul>
        </main>
    )
}