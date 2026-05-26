import { Outlet } from "react-router-dom"
import { Navbar } from "../components/NavBar"

export const MainLayout = () => {
    return <div>
        <Navbar />
        <Outlet />
    </div>
}