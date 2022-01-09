import poza from "../assets/oradea/aquapark.jpg";

function Image() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline"> Hello world! </h1>
      <img src={poza} alt="test" />
    </div>
  );
}

export default Image;
