import { useState, useCallback } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { Select, Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import { testType } from "./api/tests";

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: var(--defaultTextColor);
    margin: 0;
    line-height: 1.15;
    font-size: clamp(30px, 5.5vw, 64px);
  }
`;
const CheckBoxContainer = styled.section`
  margin-top: 2vh;
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  label {
    width: 100%;
  }
`;
const StyledSelect = styled.select`
  width: 100%;
  max-width: 400px;
  height: 50px;
  border: 1px solid #888;
  border-radius: 5px;
  padding: 5px;
`;

export const getStaticProps = async () => {
  return {
    props: {
      testTypes: testType,
    },
  };
};

interface Tests {
  id?: string;
  name?: string;
  value?: string;
}

export default function Home({ testTypes }) {
  const [answeredQuestion, setAnsweredQuestion] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [testsDesired, setTestsDesired] = useState([]);
  const handleCheck = (props, e) => {
    const tests = props.data.checked;
    let currentTests = [...testsDesired];
    // console.log(index.value.isChecked);
    setTestsDesired([...currentTests]);
    setIsChecked(!isChecked);
    console.log(tests);
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

      <Main>
        <h1 className={styles.title}>VWO Test Generator</h1>
        <CheckBoxContainer>
          {testTypes.map((test: Tests) => (
            <Checkbox
              key={test.id}
              size="lg"
              value={test.value}
              name="typeOfTest"
              onChange={handleCheck}
              checked={isChecked}
            >
              {test.name}
            </Checkbox>
          ))}
        </CheckBoxContainer>
        {answeredQuestion && <button>Add another</button>}
      </Main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
