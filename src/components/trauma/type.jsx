import typeImage from "../../assets/typeTrauma.jpg";

function Type() {
  const content = {
    intro:
      "Before we delve into the various types of trauma, let us acknowledge that trauma's impact can be multifaceted, and its effects are deeply personal. Each person's experience is unique, and understanding the diverse nature of trauma is essential in providing compassionate support and effective healing. In this section, we explore six distinct categories of trauma, each carrying its own set of challenges and implications. By gaining insight into these types of trauma, we hope to create a space of recognition and validation for those who have endured various forms of adversity. Remember, you are not alone, and our commitment to guiding you on your healing journey remains unwavering.",
    contents: [
      {
        title: "Acute Trauma",
        desc: "Acute trauma refers to trauma resulting from a single, severe event that is sudden and unexpected. This can include accidents, natural disasters, physical assaults, or witnessing a traumatic incident. Acute trauma can overwhelm an individual's coping mechanisms, leading to a range of emotional and physical reactions in response to the event. The effects of acute trauma may be immediate or develop shortly after the event, impacting a person's sense of safety and stability.",
      },
      {
        title: "Complex Trauma",
        desc: "Complex trauma involves chronic exposure to adverse and distressing experiences, often occurring within interpersonal relationships. This type of trauma can arise from prolonged abuse, neglect, or domestic violence, leaving individuals to cope with ongoing stress and uncertainty. Complex trauma can have profound and long-lasting effects on emotional regulation, self-esteem, and the ability to form healthy relationships. It may lead to a range of complex symptoms and challenges that require specialized support and therapeutic interventions.",
      },
      {
        title: "Developmental Trauma",
        desc: "Developmental trauma refers to trauma experienced during critical periods of growth and development, typically in childhood. Adverse experiences during early years can significantly impact emotional and psychological well-being, affecting attachment styles, cognitive development, and emotional regulation. Developmental trauma can have lasting effects into adulthood, shaping an individual's sense of self, interpersonal relationships, and overall mental health.",
      },
      {
        title: "Vicarious Trauma",
        desc: "Vicarious trauma, also known as secondary trauma, occurs when individuals experience the emotional toll of witnessing or supporting others through traumatic events. This can affect professionals such as first responders, healthcare providers, social workers, and caregivers who regularly encounter trauma in their work. Hearing or witnessing others' traumatic experiences can lead to feelings of stress, emotional exhaustion, and compassion fatigue, necessitating self-care and support to prevent burnout.",
      },
      {
        title: "Collective Trauma",
        desc: "Collective trauma refers to trauma experienced collectively by communities or societies due to large-scale events like war, terrorism, natural disasters, or social upheavals. This type of trauma can have far-reaching consequences, impacting the social fabric, cultural identity, and collective well-being of affected communities. The aftermath of collective trauma may involve grief, loss, and the need for collective healing and rebuilding.",
      },
      {
        title: "Interpersonal Trauma",
        desc: "Interpersonal trauma results from harmful interactions with others, where an individual experiences abuse, violence, or betrayal. This type of trauma can include sexual assault, physical abuse, emotional manipulation, or toxic relationships. Interpersonal trauma can shatter a person's sense of trust and safety, leading to difficulties in forming healthy relationships and regulating emotions.",
      },
    ],
    ending:
      "It is essential to recognize that trauma experiences are diverse and can affect individuals differently. Understanding these various types of trauma helps us approach healing with empathy and tailor support to each person's unique needs. Professional assistance and trauma-informed care are vital in helping individuals recover and build resilience after experiencing trauma.",
  };

  return (
    <>
      <div className="md:col-span-4 pb-6 md:pt-0 pt-6">
        <div className="text-3xl pb-6 font-serif">Types of Trauma</div>
        <div className="pb-6 text-justify">{content.intro}</div>
        <div>
          {content.contents.map((item, index) => (
            <div key={index} className="pb-6">
              <div className="text-lg underline">
                {index + 1}. {item.title}
              </div>
              <div className="">{item.desc}</div>
            </div>
          ))}
        </div>
        <img src={typeImage} className="h-80 pb-6" />
        <div className="pt-6">{content.ending}</div>
      </div>
    </>
  );
}

export default Type;
