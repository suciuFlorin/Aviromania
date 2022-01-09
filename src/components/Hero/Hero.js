import { useState, useEffect } from "react";
import Oradea from "../../assets/main/oradea.jpg";
import Brasov from "../../assets/main/brasov.jpg";
import Cluj from "../../assets/main/cluj.jpg";
import Sibiu from "../../assets/main/sibiu.jpg";

function Hero() {
  const mainOrase = [
    { name: "Oradea", src: Oradea },
    { name: "Brasov", src: Brasov },
    { name: "Cluj", src: Cluj },
    { name: "Sibiu", src: Sibiu },
  ];
  const [currentCity, setCurrentCity] = useState(mainOrase[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let localIndex = 0;
    const interval = setInterval(() => {
      console.log(localIndex, mainOrase.length);

      if (localIndex < mainOrase.length) {
        setIndex(localIndex);
        setCurrentCity(mainOrase[localIndex]);
      }
      localIndex = localIndex + 1;
      if (localIndex === mainOrase.length) {
        localIndex = 0;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex h-full flex-col justify-center h-full p-12">
      <div className="flex justify-center  mb-8 mt-8">
        <h1 className="font-mono text-4xl font-medium text-white uppercase bg-brand p-4 ">
          Orase din Romania
        </h1>
      </div>
      <div className="flex flex-row content-center justify-center">
        <p className="font-mono align-middle text-xl font-medium text-white mr-6 bg-brand p-4 w-1/2 border-2 border-brand rounded-lg">
          România a devenit o destinație turistică tot mai căutată de străini în
          ultimii ani. În 2017, 2,75 milioane de turiști străini au vizitat țara
          noastră, potrivit Institutului Național de Statistică (INS). Numărul
          lor a crescut cu aproximativ 11% comparativ cu anul 2016, când 2,47
          milioane de turiști din afara țării au ajuns pe teritoriul
          României.Față de anii anteriori, creșterea e și mai însemnată: în
          2015, în țara noastră au ajuns 2,23 milioane de turiști străini, iar
          în 2014, 1,91. In cadrul acestui site va vom prezenta cateva dintre
          orasele pe care nu trebuie sa le ratati daca vizitati Romania.
        </p>
        <div className="flex h-128 w-1/2 border-2 border-brand rounded-lg">
          <img
            className="h-full w-full object-cover"
            src={currentCity.src}
            alt={`main picture of the city ${mainOrase[index]}`}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
