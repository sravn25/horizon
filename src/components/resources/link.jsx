import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import miasa from "../../assets/miasa.png";
import mmha from "../../assets/mmha.png";
import cbt from "../../assets/cbt.webp";
import trauma from "../../assets/complextrauma.webp";

const Link = () => {
  const sites = [
    {
      title: "Mental Illness Awareness & Support Association",
      desc: "Mental Illness Awareness & Support Association (MIASA), or Persatuan Kesedaran Dan Sokongan Penyakit Mental – is a Mental Health Advocacy and Peer Support NGO based in Selangor. It was founded in September 2017 and registered under ROS with the registration number PPM-027-10-14092017.",
      img: miasa,
      link: "https://www.miasa.org.my/index.html",
    },
    {
      title: "Malaysian Mental Health Association",
      desc: "The Malaysian Mental Health Association (MMHA) is a non-profit Non-Government Organisation registered under the Societies Act 1966 MMHA is managed by an elected committee of interested persons and professionals in the community, including caregivers of persons living with mental disorders.",
      img: mmha,
      link: "https://mmha.org.my/about-mmha",
    },
    {
      title: "WeHeartCBT",
      desc: "WeHeartCBT is a collection of resources aimed at helping children and young people who are struggling with symptoms of anxiety and/or low mood. Resources are based on a Cognitive Behavioural Therapy (CBT) approach and are for mental health professionals, schools and parents/families.",
      img: cbt,
      link: "https://weheartcbt.com/",
    },
    {
      title: "Complex Trauma Resources",
      desc: "Complextrauma.org was created by people whose professional backgrounds in the trauma field have been informed by our lived experiences. Our goal was to establish the most comprehensive repository of information and resources on complex traumatic stress, and to make it comprehensible to the public and professional alike.",
      img: trauma,
      link: "https://www.complextrauma.org/",
    },
  ];

  const card = (index) => {
    return (
      <Card maxW="sm">
        <CardBody>
          <a href={sites[index].link} target="_blank" rel="noreferrer">
            <img
              src={sites[index].img}
              className="h-40 flex justify-center items-center mx-auto hover:opacity-70 hover:cursor-pointer"
            />
          </a>
          <Stack mt="6" spacing="3">
            <div className="text-xl">{sites[index].title}</div>
            <div>{sites[index].desc}</div>
          </Stack>
        </CardBody>
        <CardFooter>
          <div className="hover:text-gray-400">
            <a href={sites[index].link} target="_blank" rel="noreferrer">
              {sites[index].link}
            </a>
          </div>
        </CardFooter>
      </Card>
    );
  };

  return (
    <div className="bg-heather p-6">
      <div className="text-deep-forest-green text-3xl font-bold font-serif">
        Useful Websites
      </div>
      <div className="py-6 md:text-xl text-md">
        A Selection of Resources for Support with Mental Health
      </div>

      <div className="flex md:flex-col justify-center">
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        >
          {card(0)}
          {card(1)}
          {card(2)}
          {card(3)}
        </SimpleGrid>
      </div>
    </div>
  );
};

export default Link;
