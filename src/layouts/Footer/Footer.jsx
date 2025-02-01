import * as SC from "./FooterCustom"

import { ReactComponent as LogoFooter } from "../../assets/pics/logo-dark.svg"
import { ReactComponent as FbIcon } from "../../assets/pics/icon-facebook.svg"
import { ReactComponent as InsIcon } from "../../assets/pics/icon-instagram.svg";
import { ReactComponent as TwitterIcon } from "../../assets/pics/icon-twitter.svg";


const Footer = () => {
    return (
      <SC.FooterCustom>
        <LogoFooter />
        <SC.IconsList>
          <li>
            <FbIcon />
          </li>
          <li>
            <InsIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
        </SC.IconsList>
      </SC.FooterCustom>
    );
}
 
export default Footer;