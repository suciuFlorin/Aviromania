import React from "react";
import { Navigate, useParams } from "react-router-dom";

import Atractie from "./Atractie";

function Oras() {
  let params = useParams();

  const oras = params?.oras;

  const atractie = params?.atractie;

  if (!atractie) {
    return <Navigate to={`/${oras}/despre`} />;
  }

  return <Atractie />;
}

export default Oras;
