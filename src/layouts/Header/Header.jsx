import * as SC from "./HeaderCustom"

import { ReactComponent as LogoWhite } from "../../assets/pics/logo-light.svg"

const Header = () => {
    return ( 
        <SC.HeaderCustom>
            <LogoWhite />
            <button type="button">Apply for access</button>
        </SC.HeaderCustom>
     );
}
 
export default Header;