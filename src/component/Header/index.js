import {Flex,Button} from 'antd';
import { ROUTE_CONSTANTS } from '../../util/constant';
import { Link } from 'react-router-dom';
import './index.css'

const Header = ()=>{
    return(
        <div className='main_header'>
            <Flex justify='space-between' align = 'center'>
                <p>Game</p>
                <div>
                    <Link to = {ROUTE_CONSTANTS.LOGIN}>
                    <Button >
                        Sign in
                    </Button>
                    </Link>
                </div>
            </Flex>
        </div>
    )
}

export default Header;