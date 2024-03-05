import Avatar from "../img/417778087_7000689170016344_6548465954836277301_n.jpg";

import InformationContainer from "./InformationContainer";
import SocialNetworks from "./SocialNetworks";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Alexandre Rogério" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="#" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
