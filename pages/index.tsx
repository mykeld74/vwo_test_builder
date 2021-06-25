import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Container, Heading, Button, Grid } from "@chakra-ui/react";
import { testType } from "../api/tests";
import HeadlineUpdate from "../components/headline";
import AddQuestion from "../components/addQuestion";
import RemoveQuestion from "../components/removeQuestion";
import AddressEmailFF from "../components/moveAddressAndEmailtoFF";
import MoveQuestion from "../components/moveQuestion";
import CombineBirthdate from "../components/combineBirthdate";

export const getStaticProps = async () => {
  return {
    props: {
      testTypes: testType,
    },
  };
};

interface Tests {
  id?: string;
  test?: string;
  value?: string;
  testFunctions?: string;
}

export default function Home({ testTypes }) {
  const [testDesired, setTestDesired] = useState("");
  const [testValue, setTestValue] = useState("");

  let TestArray = [];
  let TestsToRun: Array<string> = [];

  return (
    <>
      <Head>
        <title>VWO Test Builder</title>
        <meta
          name="description"
          content="This app allows the user to quickly generate codes to run common VWO tests"
        />
        <link rel="icon" href="/suitedConnectorLogo.png" />
      </Head>
      <Heading fontSize="var(--h1)" textAlign="center" className="headline">
        VWO Test Generator
      </Heading>
      <Container style={{ width: "100%", maxWidth: "100%" }}>
        <Grid templateColumns="1fr 3fr">
          <aside>
            {testTypes.map((test: Tests) => (
              <Button
                key={test.id}
                size="sm"
                marginTop="20px"
                colorScheme="orange"
                width="100%"
                onClick={() => {
                  setTestDesired(test.value);
                  setTestValue(test.value);
                }}
              >
                {test.test}
              </Button>
            ))}
          </aside>
          <Container maxWidth="100%">
            {testDesired === "HeadlineUpdate" && <HeadlineUpdate />}
            {testDesired === "addQuestion" && (
              <AddQuestion testFunctions={testDesired} />
            )}
            {testDesired === "removeQuestion" && (
              <RemoveQuestion testFunctions={testDesired} />
            )}
            {testDesired === "emailAndAddresstoFF" && (
              <AddressEmailFF testFunctions={testDesired} />
            )}
            {testDesired === "reorderQuestions" && (
              <MoveQuestion testFunctions={testDesired} />
            )}
            {testDesired === "combineBirthday" && (
              <CombineBirthdate testFunctions={testDesired} />
            )}
          </Container>
        </Grid>
      </Container>

      <footer className={styles.footer}></footer>
    </>
  );
}
