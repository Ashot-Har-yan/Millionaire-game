import { Outlet } from "react-router-dom";
import {Button } from "antd";
import { Link } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../util/constant";

const MainLayout = ()=>{
    return(
     <div style={{textAlign:'center'}}>
                <Link to = {ROUTE_CONSTANTS.LOGIN}>
            <Button type = 'primary' htmltype = 'submit' style={{padding:'24px 48px'}}>
                    Start Game
                    </Button>
                    </Link> 
                <main>
                   <Outlet />
                </main>
                </div>
    )
};
export default MainLayout