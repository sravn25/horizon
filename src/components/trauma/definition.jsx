import traumaImage from "../../assets/trauma.avif";

const Definition = () => {
  const topic = [
    {
      title: "Definition of Trauma",
      content: [
        "Trauma refers to the psychological and emotional response to distressing or deeply disturbing events that can be physically or emotionally harmful. These events are often perceived as life-threatening, overwhelming, or beyond one's ability to cope effectively. Trauma can result from a single incident, such as a natural disaster, physical assault, or loss of a loved one, or it can stem from repeated experiences of abuse, neglect, or prolonged stress.",
        "Traumatic events may lead to a range of reactions and symptoms, including flashbacks, nightmares, anxiety, depression, hypervigilance, avoidance, and difficulties in relationships. Trauma can profoundly impact an individual's sense of safety, trust, and emotional well-being, often interfering with daily functioning and quality of life.",
        "It's important to note that trauma can be subjective, as what may be traumatic for one person might not be traumatic for another. Additionally, individuals can experience different types of trauma, including acute trauma (resulting from a single event) and complex trauma (stemming from prolonged and multiple traumas). Professional support and trauma-informed care are crucial in helping individuals navigate the healing process after experiencing trauma.",
      ],
      img: traumaImage,
    },
  ];

  return (
    <>
      <div className="md:col-span-4 pb-6 md:pt-0 pt-6">
        <div className="text-3xl pb-6 font-serif">{topic[0].title}</div>
        <div>
          {topic[0].content.map((item, index) => (
            <div key={index} className="pb-6 text-justify">
              {item}
            </div>
          ))}
        </div>
        <img src={topic[0].img} className="h-60 pt-6" />
      </div>
    </>
  );
};

export default Definition;
