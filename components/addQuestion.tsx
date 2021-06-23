import React, { useState } from "react";
import {
  Container,
  Heading,
  Textarea,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
import { TiArrowSortedDown } from "react-icons/ti";
import VWOCode from "./vwoTestCode";

export default function AddQuestion() {
  const [newQuestion, setNewQuestion] = useState("");

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
          />
          <label htmlFor="position">What question number should this be?</label>
          <Input
            name="position"
            id="position"
            type="number"
            placeholder="Question Number"
            required
          />
          <label htmlFor="path">Which path?</label>
          <Select name="path" id="path" icon={<TiArrowSortedDown />}>
            <option value="both">Both Paths</option>
            <option value="refinance">Refinance</option>
            <option value="purchase">Purchase</option>
            <option value="health">Health</option>
            <option value="med">Med</option>
          </Select>
          <p style={{ marginTop: "20px", fontWeight: 700 }}>VWO test code:</p>

          <VWOCode />
        </>
      </Container>
    </div>
  );
}
