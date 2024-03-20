// or string[] can be used to
const LanguagePage = ({ language }: { language: Array<string> }) => {
  return (
    <>
      <h1>language:</h1>
      <p>{language.map((i) => i + " ")}</p>
    </>
  );
};

export default LanguagePage;
