import { Outlet, NavLink } from "react-router-dom"
import '../App.css'
import '../styles/ToDoList.css'
import '../styles/Counter.css'
import '../styles/UserProfile.css'
import '../styles/ProductCard.css'

export default function Root() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={'todo'} className={({ isActive }) => isActive ? "link-active" : ""}>To do list</NavLink>
                        </li>
                        <li>
                            <NavLink to={'counter'} className={({ isActive }) => isActive ? "link-active" : ""}>Counter</NavLink>
                        </li>
                        <li>
                            <NavLink to={'user-profile'} className={({ isActive }) => isActive ? "link-active" : ""}>User profile</NavLink>
                        </li>
                        <li>
                            <NavLink to={'products'} className={({ isActive }) => isActive ? "link-active" : ""}>Products</NavLink>
                        </li>
                        <li>
                            <NavLink to={'movies'} className={({ isActive }) => isActive ? "link-active" : ""}>Movies</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <div>
                <Outlet />
            </div>
        </>

    )
}