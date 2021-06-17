import React, { useState } from "react";
import { Box, Heading, Button } from "@chakra-ui/react";
import { GoPlus } from "react-icons/go";
import { FaTimes } from "react-icons/fa";

const card = {
  hidden: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Card = ({ id, test, value, testFunctions, addItem, removeItem }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Box
      key={id}
      variants={card}
      id={id}
      bg="var(--boxColor)"
      w="100%"
      p={4}
      borderRadius="md"
      color="white"
    >
      <Heading fontSize="var(--h4)" marginBottom="20px">
        {test}
      </Heading>
      <Button
        colorScheme={isClicked ? "red" : "blackAlpha"}
        size="sm"
        width="150px"
        rightIcon={isClicked ? <FaTimes /> : <GoPlus />}
        onClick={
          !isClicked
            ? () => {
                addItem(id, test, value, testFunctions);
                setIsClicked(true);
              }
            : () => {
                removeItem(id, test, value, testFunctions);
                setIsClicked(false);
              }
        }
        // disabled={isClicked}
        className={isClicked ? `removeButton` : `addButton`}
      >
        {isClicked ? `Remove Test` : `Add Test`}
      </Button>
    </Box>
  );
};

export default Card;
