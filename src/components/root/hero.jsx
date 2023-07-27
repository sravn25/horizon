import headlineImage from "../../assets/headlineImage.jpg";

const Hero = () => {
  return (
    <div className="relative">
      <img
        src={headlineImage}
        alt="background image"
        className="object-fill w-screen min-h-[520px] md:h-32 max-w-full"
      />
      <div className="absolute inset-y-0 right-10 top-10 bottom-10 md:w-2/3 w-10/12 p-6 bg-black bg-opacity-60 text-white">
        <div className="text-3xl py-2 mb-5 font-serif">
          Cultivating Resilience:
          <br /> Navigating Trauma, Healing, and Renewed Hope
        </div>
        <div className="text-justify py-2">
          Welcome to Cultivating Resilience, a sanctuary of support and
          empowerment for those navigating the challenging path of trauma and
          healing. We understand that life&apos;s journey may lead us through
          difficult moments, but within the depths of struggle lies the power to
          rise and thrive. Through our resources, articles, and compassionate
          community, we aim to foster renewed hope in every heart we touch.
          Together, let us navigate the transformative process of healing,
          embracing resilience, and rekindling the light within. You are not
          alone; we are here to walk this path with you, hand in hand, guiding
          each other toward brighter horizons.
        </div>
        <div className="py-2">
          <button className="border-2 rounded-3xl mt-6 border-asparagus bg-asparagus hover:bg-lime-900 text-white hover:text-celeste font-serif py-2 px-5 ">
            <a href="/resources#contact">Join Us</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
