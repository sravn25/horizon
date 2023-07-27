import Header from "../components/header";
import Footer from "../components/footer";
import Mission from "../components/about/mission-vision";
import Team from "../components/team";
import Founding from "../components/about/founding";
import logo from "../assets/logo.svg";

const About = () => {
  return (
    <div>
      <Header />
      <div className="bg-celeste">
        <div className="p-5">
          <img
            src={logo}
            className="w-20 h-20 flex justify-center items-center mx-auto"
          />
          <h1 className="font-serif text-5xl text-center">Horizon</h1>
          <p className="p-5 text-xl text-center">
            Empowering resilience on the path of trauma, healing, and renewed
            hope.
          </p>
        </div>
        <Mission />
        <Founding />
        <Team />
      </div>
      <Footer />
    </div>
  );
};

export default About;
