import response from "../../assets/response.jpg";

const Reactions = () => {
  const content = {
    intro:
      "Experiencing trauma can evoke a wide range of emotional, psychological, and physical reactions, as our minds and bodies respond to overwhelming stress and distress. Understanding these common reactions is crucial in normalizing the responses to trauma and supporting individuals through their healing process. In this section, we explore the typical reactions that may arise following traumatic events, recognizing that each person's response is unique and shaped by their individual experiences. By shedding light on these common reactions, we aim to foster empathy, dispel myths, and provide a compassionate perspective for those navigating the aftermath of trauma.",
    reactions: [
      {
        title: "Emotional Responses",
        content: [
          {
            title: "Fear and Anxiety",
            content:
              "Traumatic experiences can trigger a heightened state of fear and anxiety, leading individuals to feel constantly on edge and overwhelmed by a sense of impending danger. These emotions can be pervasive and affect day-to-day functioning, making it challenging to relax and feel safe.",
          },
          {
            title: "Anger and Irritiability",
            content:
              " Anger is a common emotional response to trauma, arising from feelings of powerlessness, injustice, or frustration. Individuals may experience intense irritability and outbursts, struggling to regulate their emotions and reactions.",
          },
          {
            title: "Guilt and Shame",
            content:
              "Survivors of trauma may grapple with feelings of guilt or shame, even when they were not responsible for the traumatic event. These emotions can stem from self-blame, a sense of inadequacy, or societal stigma surrounding the trauma.",
          },
        ],
      },
      {
        title: "Cognitive Responses",
        content: [
          {
            title: "Intrusive Thoughts",
            content:
              "Trauma survivors often experience distressing and intrusive thoughts or memories related to the traumatic event. These thoughts can be involuntary and intrusive, causing emotional distress and triggering anxiety or flashbacks.",
          },
          {
            title: "Difficulty Concentrating",
            content:
              "After a traumatic experience, individuals may find it challenging to focus and maintain attention on daily tasks and responsibilities. This cognitive impairment can impact work, school, and personal life.",
          },
          {
            title: "Memory Impairment",
            content:
              "Trauma can interfere with memory processes, leading to difficulties recalling specific details of the traumatic event or events surrounding it. Memory gaps may contribute to confusion and emotional distress.",
          },
        ],
      },
      {
        title: "Physical Reactions",
        content: [
          {
            title: "Sleep Disturbances",
            content:
              "Trauma can disrupt sleep patterns, leading to difficulties falling asleep, staying asleep, or experiencing restful sleep. Insomnia and nightmares are common sleep disturbances experienced by trauma survivors.",
          },
          {
            title: "Hypervigilance",
            content:
              "Trauma survivors may develop a state of hypervigilance, where they are constantly on high alert, scanning for potential threats or danger in their environment. This heightened sense of awareness can lead to feelings of exhaustion and anxiety.",
          },
          {
            title: "Fatigue and Exhaustion",
            content:
              "The stress of trauma can lead to overwhelming fatigue and exhaustion, both physically and emotionally. Trauma survivors may experience decreased energy levels and a sense of being drained.",
          },
        ],
      },
      {
        title: "Social and Behavioral Reactions",
        content: [
          {
            title: "Social Withdrawal",
            content:
              "Following a traumatic experience, individuals may withdraw from social interactions and isolate themselves from others. This withdrawal can result from feelings of shame, fear of judgment, or the belief that others may not understand their experiences.",
          },
          {
            title: "Avoidance",
            content:
              "Trauma survivors may avoid situations, places, or people that remind them of the traumatic event to minimize distress. Avoidance behaviors can interfere with daily life and hinder healing and recovery.",
          },
          {
            title: "Changes in Relationships",
            content:
              "Trauma can impact interpersonal relationships, leading to difficulties in forming or maintaining connections with family, friends, or colleagues. Communication patterns may change, and survivors may struggle to trust others or express their emotions openly.",
          },
        ],
      },
      {
        title: "Coping Mechanisms",
        content: [
          {
            title: "Substance Use",
            content:
              "Trauma survivors may turn to alcohol, drugs, or other substances as a way to cope with the distress and emotional pain resulting from the traumatic event. Substance use can offer temporary relief but may lead to long-term negative consequences.",
          },
          {
            title: "Self-Harming Behaviors",
            content:
              " Some individuals may develop self-harming behaviors as a maladaptive coping mechanism for dealing with overwhelming emotions. Self-harm can serve as a way to externalize internal pain or regain a sense of control, but it is not a healthy or sustainable coping strategy.",
          },
          {
            title: "Seeking Support",
            content:
              "Encouraging individuals to reach out for professional help and support is crucial for coping with trauma effectively. Seeking support from therapists, counselors, support groups, or loved ones can offer validation, guidance, and a safe space to process emotions and begin the healing journey.",
          },
        ],
      },
    ],
    ending:
      "By providing information on these common reactions, we strive to create an environment of understanding and validation, fostering resilience and healing in the aftermath of trauma.",
  };

  return (
    <>
      <div className="md:col-span-4 pb-6 md:pt-0 pt-6">
        <div className="text-3xl pb-6 font-serif">Common Reactions</div>
        <div className="pb-6 text-justify">{content.intro}</div>
        <div>
          {content.reactions.map((item, index) => (
            <div key={index} className="pb-6">
              <div className="text-lg underline pb-2">
                {index + 1}. {item.title}
              </div>
              {item.content.map((items, index) => (
                <div key={index} className="pb-3">
                  <div>
                    <span className="font-bold">{items.title}: </span>
                    {items.content}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <img src={response} className="h-60 pb-6" />
        <div className="text-justify">{content.ending}</div>
      </div>
    </>
  );
};

export default Reactions;
