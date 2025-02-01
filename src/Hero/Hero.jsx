import * as SC from "./HeroCustom";

import phoneMob from "../assets/pics/image-hero.webp";

const Hero = () => {
  return (
    <SC.HeroCustom>
      <h3>
        Data <span>tailored</span> to your needs.
      </h3>
      <img src={phoneMob} alt="phone" />
      <button type="button">Learn more</button>
    </SC.HeroCustom>
  );
};

export default Hero;
