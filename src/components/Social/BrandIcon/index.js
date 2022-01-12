import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
function Social(props) {
  const { location, icon } = props;

  const Icon = (iconName, color) => (
    <Link to={`/external/${icon}/${location}`}>
      <FontAwesomeIcon
        icon={iconName}
        style={{
          fontSize: "3rem",
        }}
        color={color}
      />
    </Link>
  );

  if (icon === "ig") {
    return Icon(faInstagram, "#f12996");
  }

  if (icon === "fb") {
    return Icon(faFacebook, "#3b5999");
  }

  if (icon === "twitter") {
    return Icon(faTwitter, "#56d5fe");
  }

  return null;
}

export default Social;
