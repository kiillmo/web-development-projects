import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      align="start"
      spacing={4}
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      boxShadow="md"
      transition="transform 0.2s"
      _hover={{
        transform: "scale(1.05)"
      }}
      width="100%" // Ensure the card takes up the full width as per grid layout
    >
      <Image src={imageSrc} alt={`Image of ${title}`} width="100%" objectFit="cover" />
      <VStack align="start" p={4} spacing={2}>
        <Heading size="md" color="black">{title}</Heading>
        <Text color="gray">{description}</Text>
        <HStack>
          <Text color="black">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" style={{color: 'black'}}/>
        </HStack>
      </VStack>
    </VStack>
  );
};


export default Card;
