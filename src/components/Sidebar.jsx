import Avatar from "../img/417778087_7000689170016344_6548465954836277301_n.jpg";

import "../styles/components/sidebar.sass";
import SocialNetworks from "./SocialNetworks";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Alexandre Rogério" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <a href="#" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
