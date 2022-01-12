import BrandIcon from "./BrandIcon";

function Social(props) {
  const oras = props?.oras;

  return (
    <div className="h-32 w-full flex gap-14 justify-center content-center items-center border-t-2">
      <BrandIcon location={oras} icon="ig" />
      <BrandIcon location={oras} icon="fb" />
      <BrandIcon location={oras} icon="twitter" />
    </div>
  );
}

export default Social;
