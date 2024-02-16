import {
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@chakra-ui/react";
import individualCounsellingSession from "../../assets/counsellor.svg";
import groupTherapy from "../../assets/groupTherapy.jpg";
import workshop from "../../assets/workshop.jpg";
import mindful from "../../assets/mindful.jpg";
import community from "../../assets/community.jpg";
import training from "../../assets/training.jpg";
import art from "../../assets/art.avif";
import workbook from "../../assets/workbook.jpg";
import helpline from "../../assets/helpline.jpg";
import professional from "../../assets/professional.jpg";

const servicesList = [
  {
    label: "Individual Counseling Sessions",
    desc: "Personalized one-on-one counseling sessions with experienced therapists, providing a safe space to explore emotions, cope with trauma, and foster healing.",
    img: individualCounsellingSession,
  },
  {
    label: "Group Therapy Programs",
    desc: "Supportive group therapy sessions that connect individuals with shared experiences, promoting understanding, empathy, and growth through guided healing exercises.  ",
    img: groupTherapy,
  },
  {
    label: "Trauma-Informed Workshops",
    desc: "Educational workshops focused on trauma awareness, coping strategies, and building resilience, empowering individuals with knowledge and tools for healing.",
    img: workshop,
  },
  {
    label: "Self-Care and Mindfulness Resources",
    desc: "A curated collection of self-care practices, mindfulness exercises, and relaxation techniques to nurture emotional well-being and reduce stress.",
    img: mindful,
  },
  {
    label: "Online Support Community ",
    desc: "A secure online platform where individuals can connect, share experiences, and find solidarity with others on their healing journey, fostering a sense of belonging and support.",
    img: community,
  },
  {
    label: "Coping Skills Training ",
    desc: "Skill-building sessions to develop effective coping strategies, empowering individuals to manage triggers, emotions, and daily stressors with resilience.",
    img: training,
  },
  {
    label: "Art and Expressive Therapy",
    desc: "Engaging creative therapies, such as art, music, or writing, to facilitate emotional expression and promote healing in a non-verbal and supportive environment.",
    img: art,
  },
  {
    label: "Trauma Recovery Workbooks",
    desc: "Accessible workbooks and resources designed to guide individuals through their trauma recovery process, offering structured exercises for self-reflection and growth.",
    img: workbook,
  },
  {
    label: "Crisis Helpline and Support",
    desc: "A dedicated helpline providing immediate crisis support and compassionate guidance for individuals in distress, available 24/7.",
    img: helpline,
  },
  {
    label: "Trauma-Informed Training for Professionals",
    desc: "Specialized training programs for healthcare providers, educators, and caregivers to enhance their understanding of trauma and improve their support for survivors.",
    img: professional,
  },
];

const Services = () => {
  const serviceCard = (id) => {
    return (
      <Card>
        <CardHeader>
          <div className="font-bold text-xl font-serif">
            {servicesList[id].label}
          </div>
          <Image src={servicesList[id].img} borderRadius="lg" paddingTop={8} />
        </CardHeader>
        <CardBody>
          <div>{servicesList[id].desc}</div>
        </CardBody>
        <CardFooter>
          <button className="py-2 px-5 border-2 rounded border-asparagus bg-white hover:bg-celeste text-black hover:text-deep-forest-green font-serif">
            <a href="/resources">Learn More</a>
          </button>
        </CardFooter>
      </Card>
    );
  };

  return (
    <div className="p-6 bg-heather">
      <div className="text-deep-forest-green text-3xl font-bold text-center font-serif">
        What We Do
      </div>
      <div className="py-6 md:text-xl text-md text-center">
        Horizon offers a broad range of services and unique programs
      </div>

      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      >
        {serviceCard(0)}
        {serviceCard(1)}
        {serviceCard(2)}
        {serviceCard(3)}
        {serviceCard(4)}
        {serviceCard(5)}
        {serviceCard(6)}
        {serviceCard(7)}
        {serviceCard(8)}
        {serviceCard(9)}
      </SimpleGrid>
    </div>
  );
};

export default Services;
