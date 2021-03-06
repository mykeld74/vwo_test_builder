import React, { useState } from "react";
import { Container, Heading, Input, Select } from "@chakra-ui/react";
import { TiArrowSortedDown } from "react-icons/ti";
import VWOCode from "./vwoTestCode";

export default function AddQuestion({ testFunctions }) {
  const [newQuestion, setNewQuestion] = useState("");
  const [position, setPosition] = useState("");
  const [path, setPath] = useState("");

  const addedQuestion =
    path === "both" || path === "" || path === undefined
      ? `addQuestion("${newQuestion}", ${position});`
      : `addQuestion("${newQuestion}", ${position}, "${path}")`;
  return (
    <div>
      <Heading fontSize="var(--h3)" textAlign="center" className="headline">
        Add a Question
      </Heading>
      <Container maxW="container.lg">
        <>
          <label htmlFor="question">What Question would you like to add?</label>
          <Input
            name="question"
            id="question"
            placeholder="New Question"
            required
            onChange={(e) => setNewQuestion(e.target.value)}
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
          <label htmlFor="path">Which path?</label>
          <Select
            name="path"
            id="path"
            icon={<TiArrowSortedDown />}
            onChange={(e) => setPath(e.target.value)}
          >
            <option value="both">Both Paths</option>
            <option value="refinance">Refinance</option>
            <option value="purchase">Purchase</option>
            <option value="health">Health</option>
            <option value="med">Med</option>
          </Select>

          {newQuestion && position && (
            <VWOCode runTest={addedQuestion} currentTests={testFunctions} />
          )}
        </>
      </Container>
    </div>
  );
}
