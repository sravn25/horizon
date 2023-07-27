import Header from "../components/header.jsx";
import Hero from "../components/root/hero.jsx";
import Label from "../components/root/label.jsx";
import Services from "../components/root/services.jsx";
import Team from "../components/root/team.jsx";
import Footer from "../components/footer.jsx";
import { links } from "./links.json";

const Root = () => {
  return (
    <>
      <Header links={links} />
      <Hero />
      <Label />
      <Services />
      <Team />
      <Footer />
    </>
  );
};

export default Root;
