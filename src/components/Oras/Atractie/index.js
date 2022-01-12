import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../Footer";
import Despre from "../Despre";
import AtractiiTuristice from "../AtractiiTuristice";
import Cazare from "../Cazare";
import Social from "../../Social";

function Atractie() {
  let params = useParams();
  const oras = params?.oras;
  const atractie = params?.atractie;

  return (
    <React.Fragment>
      <Header />
      {atractie === "despre" && <Despre />}
      {atractie === "atractii_turistice" && <AtractiiTuristice />}
      {atractie === "cazare" && <Cazare />}
      <Social oras={oras} />
      <Footer />
    </React.Fragment>
  );
}

export default React.memo(Atractie);
