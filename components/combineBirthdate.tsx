import React, { useState } from "react";
import { Container, Heading, Input } from "@chakra-ui/react";
import VWOCode from "./vwoTestCode";

export default function CombineBirthdate({ testFunctions }) {
  const [position, setPosition] = useState("");

  const birthDate = `   addQuestion("BirthDateCombined", ${position});
            removeQuestion('BirthDay');
            removeQuestion('BirthMonth');
            removeQuestion('BirthYear');`;

  return (
    <div>
      <Heading fontSize="var(--h3)" textAlign="center" className="headline">
        Combine Birthdate
      </Heading>
      <Container maxW="container.lg">
        <>
          <label htmlFor="position">
            What question number should birth date be?
          </label>
          <Input
            name="position"
            id="position"
            type="number"
            placeholder="Question Number"
            onChange={(e) => setPosition(e.target.value)}
            required
          />
          {position && (
            <VWOCode runTest={birthDate} currentTests={testFunctions} />
          )}
        </>
      </Container>
    </div>
  );
}
