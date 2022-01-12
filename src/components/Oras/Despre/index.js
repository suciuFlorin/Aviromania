import { useParams } from "react-router-dom";
import { DETALII_ORASE } from "../../../constants/orase";

function Despre() {
  let params = useParams();
  const oras = params?.oras;

  const detalii = DETALII_ORASE[oras].despre;

  return (
    <div className=" px-2 h-full overflow-auto xl:flex flex-col">
      <div class="flex justify-center  mb-8 mt-8">
        <h1 className="font-mono text-4xl font-medium text-white uppercase bg-brand p-4">
          Despre orasul {oras}
        </h1>
      </div>

      <div className="xl:flex">
        <div className="w-full xl:w-1/2 px-4">
          <div className="bg-white rounded-lg overflow-hidden mb-10">
            <img src={detalii.imgMain} alt="image" className="w-full" />
            <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
              <p class="text-base text-body-color leading-relaxed mb-7">
                {detalii.textMain}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2 px-4">
          <div className="bg-white rounded-lg overflow-hidden mb-10">
            <img src={detalii.imgSecond} alt="image" className="w-full" />
            <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
              <p class="text-base text-body-color leading-relaxed mb-7">
                {detalii.textSecond}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Despre;
