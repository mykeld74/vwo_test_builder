import React, { useState } from "react";
import { Container, Heading, Input, Select } from "@chakra-ui/react";
import { TiArrowSortedDown } from "react-icons/ti";
import VWOCode from "./vwoTestCode";

export default function RemoveQuestion({ testFunctions }) {
  const [removeQuestion, setRemoveQuestion] = useState("");
  const [path, setPath] = useState("");

  const removedQuestion =
    path === "both" || path === "" || path === undefined
      ? `removeQuestion("${removeQuestion}");`
      : `removeQuestion("${removeQuestion}", "${path}")`;
  return (
    <div>
      <Heading fontSize="var(--h3)" textAlign="center" className="headline">
        Remove a Question
      </Heading>
      <Container maxW="container.lg">
        <>
          <label htmlFor="question">
            What Question would you like to remove?
          </label>
          <Input
            name="question"
            id="question"
            placeholder="Remove Question"
            required
            onChange={(e) => setRemoveQuestion(e.target.value)}
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

          {removeQuestion && (
            <VWOCode runTest={removedQuestion} currentTests={testFunctions} />
          )}
        </>
      </Container>
    </div>
  );
}
