import React from "react";
import { Textarea, Button } from "@chakra-ui/react";
import { useClipboard } from "use-clipboard-copy";

const VWOCode = (runTest, testFunctions = []) => {
  const clipboard = useClipboard({ copiedTimeout: 5000 });
  const testsFunctions = testFunctions.length >= 1 ? testFunctions : "";
  const codeVariation = `(function () {
    if (!window.vwoTestFired) {
      var pollWin = setInterval(function () {
        var isAlterConfig = typeof window.alterConfig === 'function';
        ${testsFunctions}    
        if (
          isAlterConfig 
        ) {
         ${runTest.runTest}
          console.log('running test...');
  
          alterConfig('hiddenFields', [
            { question: 'TestVariation', value: '1' },
          ]);
  
          // fires GA tracking event
          if (window.ga && ga.loaded) {
            window.ga
              .getAll()[0]
              .send('event', 'TestVariation', 1, 'TestVariation', 0);
          }
          window.vwoConversion = function () {
            window._vis_opt_queue = window._vis_opt_queue || [];
            window._vis_opt_queue.push(function () {
              _vis_opt_goal_conversion(
                '<<<< VWO CONVERSION VALUE AS INT HERE >>>>'
              );
            });
            console.log('vwoConversion Fired');
          };
  
          clearInterval(pollWin);
        }
      }, 1000);
  
      setTimeout(function () {
        clearInterval(pollWin);
      }, 10000);
      window.vwoTestFired = true;
    }
  })();`;

  console.log(runTest.runTest);

  return (
    <>
      <Textarea
        value={codeVariation}
        readOnly
        ref={clipboard.target}
        style={{ minHeight: "70vh" }}
        marginTop="10px"
      />
      <Button
        onClick={clipboard.copy}
        size="lg"
        marginTop="20px"
        colorScheme="orange"
      >
        {clipboard.copied ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
              <rect x="9" y="3" width="6" height="4" rx="2" />
              <path d="M9 14l2 2l4 -4" />
            </svg>{" "}
            <p>Code copied!</p>
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* <path stroke="none" d="M0 0h24v24H0z" fill="none" /> */}
              <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
              <rect x="9" y="3" width="6" height="4" rx="2" />
              <line x1="9" y1="12" x2="9.01" y2="12" />
              <line x1="13" y1="12" x2="15" y2="12" />
              <line x1="9" y1="16" x2="9.01" y2="16" />
              <line x1="13" y1="16" x2="15" y2="16" />
            </svg>
            <p>Copy the Code</p>
          </>
        )}
      </Button>
    </>
  );
};

export default VWOCode;
