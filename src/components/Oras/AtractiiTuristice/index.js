import { useState } from "react";
import { useParams } from "react-router-dom";
import { DETALII_ORASE } from "../../../constants/orase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function AtractiiTuristice() {
  let params = useParams();

  const oras = params.oras;
  const detalii = DETALII_ORASE[oras].atractii_turistice;

  const [dynamicDetails, setDynamicDetails] = useState(detalii);

  const activeStyle = "ease-linear";

  function handleBackward() {
    const backDetails = dynamicDetails.shift();
    console.log([...dynamicDetails, backDetails]);
    setDynamicDetails([...dynamicDetails, backDetails]);
  }

  function handleForward() {
    const frontDetails = dynamicDetails.pop();
    setDynamicDetails([frontDetails, ...dynamicDetails]);
  }

  return (
    <div className=" px-2 h-full overflow-auto xl:flex flex-col content-around">
      <div className="flex justify-center  mb-8 mt-8">
        <h1 className="font-mono text-4xl font-medium text-white uppercase bg-brand p-4">
          Atractii turistice in {oras}
        </h1>
      </div>

      <div className="flex h-4/5 content-center self-center items-center">
        <button
          onClick={() => handleBackward()}
          className="flex h-72 justify-items-center items-center content-center gap-2 justify-center bg-amber-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-orange-600 ml-6 mr-6 xs:h-full md:h-full"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        {dynamicDetails.map((atractie, atractieIndex) => (
          <div
            key={atractie.titlu}
            className={`w-full h-full px-4 flex-row content-center ${
              atractieIndex === 0 ? activeStyle : "hidden"
            }`}
          >
            <div className="flex xl:flex-row h-full bg-white rounded-lg overflow-hidden mb-10 items-center xs:h-full md:h-full sm:flex-col">
              <img
                src={atractie.src}
                alt={atractie.titlu}
                className="w-3/6 object-cover h-72 sm:w-full sm:h-full"
              />
              <div className="flex h-72 flex-col p-8 sm:p-9 md:p-7 xl:p-9 text-center bg-stone-200 items-center content-center justify-center sm:h-full w-3/6">
                <h2 className="font-semibold text-dark text-3xl mb-4 block hover:text-primary text-center">
                  {atractie.titlu}
                </h2>
                <p className="text-black text-body-color leading-relaxed mb-7 overflow-auto">
                  {atractie.descriere}
                </p>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={() => handleForward()}
          className="flex h-72 justify-items-center items-center content-center gap-2 justify-center bg-amber-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-orange-600 ml-6 mr-6 xs:h-full md:h-full"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}

export default AtractiiTuristice;
