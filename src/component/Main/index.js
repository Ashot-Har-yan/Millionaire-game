import { Outlet } from "react-router-dom";
import Header from "../Header";

const MainLayout = ()=>{
    return(
        <div className="main_layout_cont">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}
export default MainLayout;