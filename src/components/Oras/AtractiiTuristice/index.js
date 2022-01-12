import { useParams } from "react-router-dom";

function AtractiiTuristice() {
  let params = useParams();

  console.log(params);

  return (
    <div className="max-w-7xl mx-auto px-2 h-full">Atractii turistice</div>
  );
}

export default AtractiiTuristice;
