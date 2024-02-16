import psychotherapy from "../../assets/psychotherapy.jpg";

const Founding = () => {
  return (
    <div className="p-12 my-6 bg-heather flex md:flex-row flex-col space-x-4">
      <div>
        <img src={psychotherapy} className="min-w-full object-cover" />
      </div>
      <div className="px-4 ">
        <div className="text-deep-forest-green text-2xl md:text-start text-center md:pt-0 pt-4 font-serif">
          Our Founding
        </div>
        <div className="py-6 text-md text-justify">
          Amidst the 2020 Covid pandemic, Segun, Sarah, and Emma united with a
          vision: &quot;Cultivating Resilience.&quot; Together, they aimed to empower
          others navigating trauma, healing, and renewed hope. Through therapy,
          coaching, art, and yoga, their safe haven touched countless lives,
          becoming a symbol of strength and transformation for those seeking
          solace and renewal.
        </div>
      </div>
    </div>
  );
};

export default Founding;
