import Header from "../components/header";
import Footer from "../components/footer";
import Link from "../components/resources/link";
import Form from "../components/resources/form";

const Resources = () => {
  return (
    <div>
      <Header />
      <div className="p-6 bg-celeste text-center">
        <div className="text-3xl font-bold text-deep-forest-green font-serif">
          Resources and Support
        </div>
        <div className="py-6 md:text-xl text-md">
          Empowering support for your healing journey
        </div>
      </div>
      <Link />
      <Form />
      <Footer />
    </div>
  );
};

export default Resources;
