import { Link, Outlet } from "react-router-dom";
import "./page.css";
const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav>
                <ul className="none-list">
                    <li className="liststyle">
                        <Link to="/workspace" className="none">WORKSPACE</Link>
                    </li>
                    <li className="liststyle">
                        <Link to="/Background" className="none">BACKGROUND</Link>
                    </li>
                    {/* <li className="liststyle">
                        <Link to="/employee_list" className="none">Employees</Link>
                    </li>
                    <li className="liststyle">
                        <Link to="/sale_report_list" className="none">Sale Reports</Link>
                    </li> */}
                </ul>
            </nav>
            <Outlet />
        </div>



    )
}
export default Sidebar;