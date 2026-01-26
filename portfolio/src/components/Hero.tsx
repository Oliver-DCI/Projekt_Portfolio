const Hero = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className="mx-38">
        <img
          src="/img/hero.jpg"
          alt=""
          className="w-full max-h-[350px] rounded-md transition duration-500 hover:contrast-125 hover:saturate-150"
        />
      </div>
    </div>
  );
};

export default Hero;
