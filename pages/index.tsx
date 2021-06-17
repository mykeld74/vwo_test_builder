import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Container, Grid, Heading, Textarea } from "@chakra-ui/react";
import Card from "../components/card";
import { testType } from "./api/tests";
import VWOTestCode from "../components/vwoTestCode";

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
  const [testsDesired, setTestsDesired] = useState([]);
  let TestArray = [];
  let TestsToRun: Array<string> = [];

  const handleAdd = (id, test, value, testFunctions) => {
    const newTests = testsDesired.concat({
      id,
      test,
      value,
      testFunctions,
    });

    setTestsDesired(newTests);
    newTests.map((requiredTests) =>
      TestArray.push(...requiredTests.testFunctions)
    );
    TestsToRun = [...new Set(TestArray)];
    // console.log({ TestsToRun });
  };

  const handleRemove = (id, testFunctions) => {
    const newTests = testsDesired.filter((item) => item.id !== id);
    setTestsDesired(newTests);
    newTests.map((requiredTests) =>
      TestArray.push(...requiredTests.testFunctions)
    );
    TestsToRun = [...new Set(TestArray)];
    // console.log({ TestsToRun });
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>VWO Test Builder</title>
        <meta
          name="description"
          content="This app allows the user to quickly generate codes to run common VWO tests"
        />
        <link rel="icon" href="/suitedConnectorLogo.png" />
      </Head>

      <Container maxW="container.lg">
        <Heading fontSize="var(--h1)" textAlign="center">
          VWO Test Generator
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" gap={6} w="100%">
          <Grid templateColumns="1fr" gap={6}>
            {testTypes.map((test: Tests) => (
              <Card
                key={test.id}
                id={test.id}
                test={test.test}
                value={test.value}
                testFunctions={test.testFunctions}
                addItem={handleAdd}
                removeItem={handleRemove}
              ></Card>
            ))}
          </Grid>
          <Grid>
            {testsDesired.length <= 0 ? (
              <Heading fontSize="var(--h4)">
                Please choose your test(s):
              </Heading>
            ) : (
              <div>
                <Heading fontSize="var(--h4)">Tests Selected:</Heading>
                {/* {console.log({ testsDesired })} */}
                <div>
                  {testsDesired.map((testsSelected) => (
                    <p key={testsSelected.id}>{testsSelected.test}</p>
                  ))}
                </div>
                <Textarea
                  value={VWOTestCode(testsDesired)}
                  id="vwoCode"
                  className="vwoTestInput"
                  readOnly={true}
                  style={{ height: "85vh", whiteSpace: "pre-wrap" }}
                />
              </div>
            )}
          </Grid>
        </Grid>
      </Container>

      <footer className={styles.footer}></footer>
    </div>
  );
}
