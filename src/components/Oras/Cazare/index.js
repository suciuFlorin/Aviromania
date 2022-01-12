import { useParams } from "react-router-dom";
import { DETALII_ORASE } from "../../../constants/orase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Cazare() {
  let params = useParams();
  const oras = params?.oras;

  const detalii = DETALII_ORASE[oras].cazare;

  return (
    <div className=" px-2 h-full overflow-auto xl:flex flex-col">
      <div className="flex justify-center  mb-8 mt-8">
        <h1 className="font-mono text-4xl font-medium text-white uppercase bg-brand p-4">
          Cazare in orasul {oras}
        </h1>
      </div>

      <div className="xl:flex">
        {detalii.map((cazare) => (
          <div key={cazare.titlu} className="w-full h-full xl:w-1/3 px-4">
            {HeaderCazare(cazare.titlu, cazare.href)}
            <div className="bg-white rounded-lg overflow-hidden mb-10">
              <img
                src={cazare.img}
                alt={cazare.titlu}
                className="w-full object-cover h-fit xl:max-h-80"
              />
              <div className=" p-8 sm:p-9 md:p-7 xl:p-9 text-center bg-stone-200 h-full">
                <p className="text-black text-body-color leading-relaxed mb-7">
                  {cazare.descriere}
                </p>
                <a
                  href={cazare.href}
                  className="flex justify-items-center items-center content-center gap-2 justify-center bg-amber-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-orange-600 mr-6 text-center"
                >
                  Rezerva aici
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cazare;

const HeaderCazare = (text, link) => {
  return (
    <h3>
      <a
        href={link}
        className="font-semibold text-dark text-3xl mb-4 block hover:text-primary text-center"
      >
        {text}
      </a>
    </h3>
  );
};
