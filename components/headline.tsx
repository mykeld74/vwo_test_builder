import React, { useState } from "react";
import Head from "next/head";
// import styles from "../styles/Home.module.css";
import { Container, Heading, Textarea, Input, Button } from "@chakra-ui/react";
import { useClipboard } from "use-clipboard-copy";
import VWOCode from "./vwoTestCode";

export default function HeadlineUpdate() {
  const [headline, setHeadline] = useState("");
  const [subHeadline, setSubHeadline] = useState("");
  const [hasSubhead, setHasSubHead] = useState(false);
  const [showSubhead, setShowSubhead] = useState(false);
  const [removeSubhead, setRemoveSubhead] = useState(false);

  const runTest = hasSubhead
    ? `isAlterConfig('headline', "${headline}"); 
         isAlterConfig('subhead', "${subHeadline}");`
    : `isAlterConfig('headline', "${headline}");`;

  return (
    <div>
      <Heading fontSize="var(--h3)" textAlign="center" className="headline">
        VWO Headline Update
      </Heading>
      <Container maxW="container.lg">
        <label htmlFor="newHeadline">Enter your new headline here.</label>
        <Input
          id="newHeadline"
          name="newHeadline"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
          placeholder="Enter new headline"
        />

        <Button
          onClick={() => {
            setShowSubhead(!showSubhead);
            setHasSubHead(!hasSubhead);
          }}
          size="lg"
          marginTop="20px"
          colorScheme="orange"
        >
          {showSubhead ? "Keep existing sub-headline" : "Update sub-headline"}
        </Button>

        {showSubhead && (
          <div>
            <Button
              onClick={() => {
                setRemoveSubhead(!removeSubhead);
                setSubHeadline("");
                setHasSubHead(true);
              }}
              size="lg"
              marginTop="20px"
              colorScheme="orange"
            >
              Remove the sub-headline
            </Button>
            <p style={{ fontWeight: 700, margin: "10px 0" }}>--or--</p>
            <label htmlFor="newSubHeadline">
              Enter your new sub-headline here.
            </label>
            <Input
              id="newSubHeadline"
              name="newSubHeadline"
              value={subHeadline}
              onChange={(e) => {
                setSubHeadline(e.target.value);
                subHeadline.length <= 1
                  ? setHasSubHead(false)
                  : setHasSubHead(true);
              }}
              placeholder="Enter new sub headline"
            />
          </div>
        )}

        {headline.length >= 1 && (
          <>
            <p style={{ marginTop: "20px", fontWeight: 700 }}>VWO test code:</p>
            <VWOCode runTest={runTest} />
          </>
        )}
      </Container>
    </div>
  );
}
