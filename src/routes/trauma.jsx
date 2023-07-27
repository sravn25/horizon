import Header from "../components/header";
import Footer from "../components/footer";
import Menu from "../components/trauma/menu";
import Definition from "../components/trauma/definition";
import Type from "../components/trauma/type";
import Reactions from "../components/trauma/reactions";
import Resources from "../components/trauma/resources";
import { useState } from "react";

const Trauma = () => {
  const [topic, setTopic] = useState(0);

  const handleTopic = (index) => {
    setTopic(index);
  };

  const setContent = () => {
    if (topic === 0) return <Definition />;
    else if (topic === 1) return <Type />;
    else if (topic == 2) return <Reactions />;
    else return <Resources />;
  };

  return (
    <>
      <Header />
      <div className="p-6 bg-celeste text-center border-b-2 border-black">
        <div className="text-3xl font-bold text-deep-forest-green font-serif">
          Understanding Trauma
        </div>
        <div className="py-6 md:text-xl text-md">
          Unraveling trauma&apos;s impact and fostering healing.
        </div>
      </div>

      <div className="bg-celeste p-6">
        <div className="md:grid md:grid-cols-5 md:gap-4 flex flex-col">
          <Menu sendTopic={handleTopic} />
          {setContent()}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Trauma;
