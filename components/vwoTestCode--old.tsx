function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const VWOTestCode = (testsDesired) => {
  const setVars = testsDesired.map((currentTests) => {
    const testScripts = currentTests.testFunctions.map((currentFunctions) => {
      const testCheck = capitalize(currentFunctions);

      return `var is${testCheck} = typeof window.${currentFunctions} === 'function';`;
    });
    return testScripts;
  });
  const currentScripts = [...setVars];
  const scriptsCheck = currentScripts.map((scripts) => {
    return [...scripts];
  });
  const scriptsToRun = [].concat(...scriptsCheck);
  const reducedScripts = [...new Set(scriptsToRun)].join(` 
      `);

  console.log(reducedScripts);

  return `(function () {
    if (!window.vwoTestFired) {
      var pollWin = setInterval(function () {
        ${reducedScripts}
  
        if (
          isAlterConfig  &&
          isAlterQuestions &&
          isAlterQuestionText &&
          isRemoveQuestion &&
          isChangeSlider &&
          isNewClass &&
          isAddQuestion &&
          isSkipZip
        ) {
          // function exists in the window, run your vwo test below
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
  
          clearInterval(pollWin);
        }
      }, 1000);
  
      setTimeout(function () {
        clearInterval(pollWin);
      }, 10000);
      window.vwoTestFired = true;
    }
  })();
  `;
};

export default VWOTestCode;
