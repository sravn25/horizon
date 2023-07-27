import {
  Card,
  CardHeader,
  CardBody,
  Flex,
  Avatar,
  Box,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import segun from "../assets/segun.jpg";
import sarahAvatar from "../assets/SarahWilliams.jpg";
import sarahWilliams from "../assets/Sarah-Williams-01.jpeg";
import annaAvatar from "../assets/anna.png";
import annaWeyant from "../assets/annaweyant.webp";

const Team = () => {
  const teamCard = (avatar, name, label, desc, image) => {
    return (
      <Card maxW="md">
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name={name} src={avatar} />
              <Box>
                <div className="text-xl font-serif">{name}</div>
                <div className="text-md">{label}</div>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <div>{desc}</div>
        </CardBody>
        <Image objectFit="cover" src={image} />
      </Card>
    );
  };

  return (
    <div className="p-6 bg-celeste">
      <div className="text-deep-forest-green text-3xl font-bold text-center font-serif">
        Meet the Team
      </div>
      <div className="py-6 md:text-xl text-md text-center">
        Meet our compassionate healing guides
      </div>
      <div className="flex justify-center">
        <SimpleGrid spacing={4} columns={[1, null, 3]}>
          {teamCard(
            "https://bit.ly/sage-adebayo",
            "Dr. Segun Adebayo",
            "Clinical Psychologist and Resilience Coach",
            "Johnathan is a dedicated support group facilitator and peer mentor with a lived experience of trauma recovery. Through his genuine empathy and understanding, he fosters a sense of belonging and empowerment within the support community. Johnathan's guidance and encouragement inspire others on their journey to healing and renewed hope.",
            segun
          )}
          {teamCard(
            sarahAvatar,
            "Sarah Williams",
            "Licensed Therapist and Trauma Specialist",
            "Sarah is a licensed therapist with years of experience in trauma-focused counseling. Her empathetic and non-judgmental approach creates a safe space for clients to explore their trauma and healing journey. Sarah is passionate about empowering individuals to build resilience and find strength in adversity.",
            sarahWilliams
          )}
          {teamCard(
            annaAvatar,
            "Emma Martinez",
            "Art Therapist and Mindfulness Instructor",
            "Emma is a skilled art therapist and mindfulness instructor, integrating creative expression and mindfulness practices into the healing process. Her nurturing approach encourages emotional exploration, helping clients connect with their inner strength and foster self-compassion on their path to healing.",
            annaWeyant
          )}
        </SimpleGrid>
      </div>
    </div>
  );
};

export default Team;
