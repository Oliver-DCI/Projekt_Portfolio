const Hero = () => {
  return (
    <div className="w-full">
      <img
        src="/img/hero.jpg"
        alt=""
        className="w-full max-h-[350px] rounded-md object-cover transition duration-500 hover:contrast-125 hover:saturate-150"
      />
    </div>
  );
};

export default Hero;
