const Label = () => {
  return (
    <div className="flex justify-between items-center w-full bg-yellow-400">
      <div className="p-6 font-black text-3xl text-deep-forest-green">Reach out to us!</div>
      <div className="font-semibold text-lg">
        Discover the power of resilience and healing. Join us on the path to
        renewed hope after trauma.
      </div>
      <div className="p-6">
        <button className="border-2 rounded-3xl border-asparagus bg-asparagus hover:bg-lime-900 text-white hover:text-celeste font-serif py-2 px-5 m-2 ">
          <a href="/resources">Reach Out</a>
        </button>
      </div>
    </div>
  );
};

export default Label;
