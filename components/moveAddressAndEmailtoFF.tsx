import React, { useState } from "react";
import { Container, Heading } from "@chakra-ui/react";
import VWOCode from "./vwoTestCode";

export default function AddressEmailFF({ testFunctions }) {
  const MoveAddressEmailFF = `   alterConfig("separateEmail", false);
            alterConfig("separateAddress", false);
            alterConfig("finalFrameOptions", {});
            removeQuestion('email');
            removeQuestion('address');
        `;

  return (
    <div>
      <Heading fontSize="var(--h3)" textAlign="center" className="headline">
        Move Email and Address to Final Frame
      </Heading>
      <Container maxW="container.lg">
        <>
          <VWOCode runTest={MoveAddressEmailFF} currentTests={testFunctions} />
        </>
      </Container>
    </div>
  );
}
