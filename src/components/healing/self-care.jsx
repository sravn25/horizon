import self from "../../assets/self.jpg";

const SelfCare = () => {
  const content = {
    title: "Self-Care Practices",
    intro:
      "Self-care is a transformative and empowering practice that honors our physical, emotional, and mental well-being. In this comprehensive compilation, we delve into a diverse array of self-care strategies and practices, nurturing a sense of inner harmony and balance amidst life's demands. From mindfulness rituals and relaxation techniques to nourishing routines and fostering self-compassion, these self-care practices offer invaluable tools to prioritize our health and cultivate a positive relationship with ourselves.",
    ending:
      "This compilation offers a roadmap for individuals seeking to embrace self-care as a fundamental pillar of well-being, enabling them to cultivate a harmonious relationship with themselves and prioritize self-nurturing practices amidst life's diverse responsibilities and experiences.",
    image: self,
    content: [
      {
        title: "Mindful Self-Reflection",
        desc: "Cultivate mindfulness through self-reflection exercises, nurturing self-awareness and emotional well-being. Take time to pause, observe your thoughts and emotions without judgment, and explore your inner landscape to gain insights into your feelings, needs, and aspirations.",
      },
      {
        title: "Stress Reduction Techniques",
        desc: "Explore effective stress reduction techniques, such as deep breathing exercises, meditation, and progressive muscle relaxation. These practices can help calm the mind, reduce physical tension, and promote relaxation, even in the face of stressors.",
      },
      {
        title: "Nurturing Sleep Habits",
        desc: "Embrace the significance of quality sleep and discover practices to promote restful nights and energized mornings. Establish a soothing bedtime routine, create a comfortable sleep environment, and prioritize sufficient sleep to support overall well-being.",
      },
      {
        title: "Healthy Nutrition and Hydration",
        desc: "Emphasize the importance of nourishing our bodies with balanced nutrition and staying hydrated. Pay attention to the food you consume, aiming for a variety of nutrient-dense foods that fuel your body and mind.",
      },
      {
        title: "Physical Activities and Exercise",
        desc: "Discover the joy of physical activities and exercise that support physical health and boost mood. Engage in activities you enjoy, whether it's dancing, walking, yoga, or any other form of movement that brings you pleasure and vitality.",
      },
      {
        title: "Creative Outlets and Artistic Expression",
        desc: "Engage in creative pursuits to foster self-expression and cultivate a sense of fulfillment. Whether through art, writing, music, or other creative outlets, allow yourself to explore your creativity as a means of emotional release and growth.",
      },
      {
        title: "Setting Boundaries and Prioritizing Time",
        desc: "Learn the art of setting boundaries and prioritizing time to protect energy and focus on meaningful activities. Establish healthy limits in your personal and professional life, allowing you to prioritize self-care and activities that align with your values.",
      },
      {
        title: "Digital Detox and Mindful Technology Use",
        desc: "Develop healthy technology habits to promote digital well-being and reduce screen time. Unplug from devices regularly, practice mindful technology use, and create tech-free spaces to foster present-moment awareness.",
      },
      {
        title: "Gratitude and Self-Compassion",
        desc: "Practice gratitude and self-compassion as cornerstones of nurturing a positive self-image. Cultivate a daily gratitude practice to focus on the positives in life, and treat yourself with kindness and understanding during challenging times.",
      },
      {
        title: "Connecting with Nature",
        desc: "Reconnect with nature's calming influence through outdoor activities and eco-friendly practices. Spend time in nature, whether through walks in the park, gardening, or simply appreciating natural beauty to foster a sense of peace and wonder.",
      },
      {
        title: "Books and Resources for Self-Care",
        desc: "Access a curated list of books and resources that provide guidance and inspiration for a holistic self-care journey. Explore self-help books, articles, and online resources that resonate with your self-care goals and aspirations.",
      },
      {
        title: "Seeking Support and Building Resilience",
        desc: "Recognize the significance of seeking support and building resilience during challenging times. Reach out to friends, family, or professionals when needed, and cultivate resilience by adopting adaptive coping strategies and a growth mindset.",
      },
    ],
  };

  return (
    <div className="md:col-span-4 pb-6 md:pt-0 pt-6">
      <div className="text-3xl pb-6 font-serif">{content.title}</div>
      <div className="pb-6 text-justify">{content.intro}</div>
      <div>
        {content.content.map((item, index) => (
          <div key={index} className="pb-6">
            <div className="text-lg underline">
              {index + 1}. {item.title}
            </div>
            <div className="">{item.desc}</div>
          </div>
        ))}
        <img src={content.image} className="h-80 pb-6" />
        <div className="pt-6">{content.ending}</div>
      </div>
    </div>
  );
};

export default SelfCare;
