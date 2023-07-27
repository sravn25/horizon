// eslint-disable-next-line react/prop-types
const Menu = ({sendTopic}) => {
  const handleClick = (index) => {
    sendTopic(index);
  };

  return (
    <div className="md:pb-0 pb-2 border-black border-b-2 md:border-b-0 md:border-r-2 border-r-0">
      <div className="text-3xl pb-6 font-serif">Topics</div>
      <ul className="flex md:block underline">
        <li className="py-6 md:m-0 m-3">
          <button className="text-left underline" onClick={()=>handleClick(0)}>
            Definition of Trauma{" "}
          </button>
        </li>
        <li className="py-6 md:m-0 m-3">
          <button className="text-left underline" onClick={()=>handleClick(1)}>
            Types of Trauma{" "}
          </button>
        </li>
        <li className="py-6 md:m-0 m-3">
          <button className="text-left underline" onClick={()=>handleClick(2)}>
            Common Reactions{" "}
          </button>
        </li>
        <li className="py-6 md:m-0 m-3">
          <button className="text-left underline" onClick={()=>handleClick(3)}>
            Resources for Understanding Trauma{" "}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
