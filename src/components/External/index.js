import { useParams } from "react-router-dom";

function External() {
  let params = useParams();

  const location = params?.oras;
  const zona = params?.zona;

  let redirectLink = `https://instagram.com/${location}`;

  if (zona === "fb") {
    redirectLink = `https://facebook.com/${location}`;
  }

  if (zona === "twitter") {
    redirectLink = `https://twitter.com/${location}`;
  }

  window.location.href = redirectLink;

  return null;
}

export default External;
