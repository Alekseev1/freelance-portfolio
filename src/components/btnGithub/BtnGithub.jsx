import "./style.scss";
import gitHubBlack from "./../../img/icons/gitHub-black.svg";

const BtnGithub = ({ link }) => {
  return (
    <a href={link} target="_blank" className="btn-outline">
      <img src={gitHubBlack} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGithub;
