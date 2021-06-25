export const testType = [
  {
    id: "0",
    test: "Change Headline",
    value: "HeadlineUpdate",
    testFunctions: ["updateConfig"],
  },
  {
    id: "1",
    test: "Add Question",
    value: "addQuestion",
    testFunctions: ["addQuestion"],
  },
  {
    id: "2",
    test: "Remove Question",
    value: "removeQuestion",
    testFunctions: ["removeQuestion"],
  },
  // {
  //   id: "3",
  //   test: "Move Address to Final Frame",
  //   value: "addressToFF",
  //   testFunctions: ["alterConfig", "removeQuestion"],
  // },
  // {
  //   id: "4",
  //   test: "Move Email to Final Frame",
  //   value: "emailToFF",
  //   testFunctions: ["alterConfig", "removeQuestion"],
  // },
  {
    id: "5",
    test: "Move Email and Address to Final Frame",
    value: "emailAndAddresstoFF",
    testFunctions: ["alterConfig", "removeQuestion"],
  },
  {
    id: "6",
    test: "Reorder Questions",
    value: "reorderQuestions",
    testFunctions: ["alterQuestions"],
  },
  {
    id: "7",
    test: "Combine Birthdate",
    value: "combineBirthday",
    testFunctions: ["addQuestion", "removeQuestion"],
  },
];
