import { TbTarget, TbEye } from "react-icons/tb";

const Mission = () => {
  return (
    <div className="flex md:flex-row flex-col gap-20 p-8 m-8">
      <div className="text-center flex flex-col items-center md:w-1/2">
        <TbTarget className="text-3xl" />
        <div className="text-2xl font-serif">Mission:</div>
        <p className="pt-4 text-justify text-md">
          At Cultivating Resilience, our mission is to provide compassionate
          support, evidence-based therapies, and empowering resources to guide
          individuals through trauma, healing, and the journey towards renewed
          hope. We strive to create a safe and nurturing space where each
          person&apos;s resilience is nurtured, and their inner strength is
          celebrated, fostering positive transformations in their lives.
        </p>
      </div>

      <div className="text-center flex flex-col items-center md:w-1/2 ">
        <TbEye className="text-3xl" />
        <div className="text-2xl font-serif">Vision:</div>
        <p className="pt-4 text-justify text-md">
          Our vision is to be a leading beacon of hope, inspiring individuals to
          overcome trauma&apos;s challenges and embrace healing with courage and
          determination. We envision a world where everyone has access to the
          support they need to cultivate resilience, thrive after trauma, and
          experience a renewed sense of hope and purpose in their lives.
        </p>
      </div>
    </div>
  );
};

export default Mission;
