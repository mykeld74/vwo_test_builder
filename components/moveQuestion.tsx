import React, { useState } from "react";
import { Container, Heading, Input } from "@chakra-ui/react";
import VWOCode from "./vwoTestCode";

export default function MoveQuestion({ testFunctions }) {
  const [moveQuestion, setMoveQuestion] = useState("");
  const [position, setPosition] = useState("");

  const movedQuestion = ` alterQuestions("${moveQuestion}", ${position});`;

  return (
    <div>
      <Heading fontSize="var(--h3)" textAlign="center" className="headline">
        Move a Question
      </Heading>
      <Container maxW="container.lg">
        <>
          <label htmlFor="question">
            What Question would you like to move?
          </label>
          <Input
            name="question"
            id="question"
            placeholder="Question to Move"
            required
            onChange={(e) => setMoveQuestion(e.target.value)}
          />
          <label htmlFor="position">What question number should this be?</label>
          <Input
            name="position"
            id="position"
            type="number"
            placeholder="Question Number"
            onChange={(e) => setPosition(e.target.value)}
            required
          />
          {moveQuestion && position && (
            <VWOCode runTest={movedQuestion} currentTests={testFunctions} />
          )}
        </>
      </Container>
    </div>
  );
}
