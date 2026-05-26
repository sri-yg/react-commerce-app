import { Outlet } from "react-router-dom"
import { Navbar } from "../components/NavBar"

export const MainLayout = ({ toast }) => {
    return <div>
        <Navbar />
        <Outlet />
        {
            toast &&
            <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}><div className="toast show toast-glow"><div className="toast-body">{toast}</div></div></div>
        }
    </div>
}
