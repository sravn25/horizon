import Header from "../components/header";
import Footer from "../components/footer";
import Menu from "../components/healing/menu";
import Strat from "../components/healing/strat";
import SelfCare from "../components/healing/self-care";
import Support from "../components/healing/support";
import { useState } from "react";

const Healing = () => {
  const [topic, setTopic] = useState(0);

  const handleTopic = (index) => {
    setTopic(index);
  };

  const setContent = () => {
    if (topic === 0) return <Strat />;
    else if (topic === 1) return <SelfCare />;
    else return <Support />;
  };
  return (
    <>
      <Header />
      <div className="p-6 bg-celeste text-center border-b-2 border-black">
        <div className="text-3xl font-bold text-deep-forest-green font-serif">
          Healing and Recovery
        </div>
        <div className="py-6 md:text-xl text-md">
          Navigating a transformative journey towards renewed strength and hope
          through support, understanding, and self-compassion.
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

export default Healing;
