import { RxEnvelopeClosed } from "react-icons/rx";
import { TbPhone } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-heather py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="">
            <h2 className="text-lg font-bold">About Us</h2>
            <p className="mt-2">
              Welcome to Cultivating Resilience, where we navigate trauma,
              healing, and renewed hope together. Our experienced team offers
              compassionate support and evidence-based approaches to nurture
              your resilience and empower your journey towards growth and
              restoration. Join us in finding strength and embracing a brighter
              tomorrow.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold">Contact</h2>
            <p className="mt-2">
              <span className="inline-block align-middle">
                <RxEnvelopeClosed />
              </span>
              <span className="p-1">Email:</span>
              <a href="mailto:info@a.com" className="hover:text-gray-500">
                wongyimingvictor@sd.taylors.edu.com
              </a>
            </p>
            <p className="mt-2">
              <span className="inline-block align-middle">
                <TbPhone />
              </span>
              <span className="p-1">Phone:</span>
              <a href="tel:60376272929" className="hover:text-gray-500">
                +603 7627 2929
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold">Reaching Out</h2>
            <div className="flex md:flex-col flex-row items-start mt-2">
              <button className="border-2 rounded-3xl border-asparagus bg-asparagus hover:bg-lime-900 text-white hover:text-celeste font-serif py-2 px-5">
                <a href="/resources">Get Help</a>
              </button>
              <button
                onClick={() => alert("Thank you for your kindness!")}
                className="border-2 rounded-3xl border-asparagus bg-white hover:bg-celeste text-black hover:text-deep-forest-green font-serif py-2 px-5 md:mt-2 md:m-0 ml-2"
              >
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
