export const PrimaryButton = (text, link) => {
  return (
    <div>
      <button className="border-2 rounded-3xl border-asparagus bg-asparagus hover:bg-lime-900 text-white hover:text-celeste font-serif py-2 px-5">
        <a href={link}>{text}</a>
      </button>
    </div>
  );
};

export const SecondaryButton = (text, link) => {
  return (
    <div>
      <button className="border-2 rounded-3xl border-asparagus bg-white hover:bg-celeste text-black hover:text-deep-forest-green font-serif py-2 px-5">
        <a href={link}>{text}</a>
      </button>
    </div>
  );
};
